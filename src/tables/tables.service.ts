import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Restoran, RestoranDocument } from '../restoran/schemas/restoran.schema';
import { Tables, TablesDocument } from './schemas/table.schema';
import { Model } from 'mongoose';
import * as QRCode from 'qrcode';
import * as path from "path";
import * as fs from "fs";





@Injectable()
export class TablesService {
  constructor(
    @InjectModel(Restoran.name) private restoranModel: Model<RestoranDocument>,
   @InjectModel(Tables.name) private tablesModel: Model<TablesDocument>) {}
   
   async generateQrCode(text:string,fileName:string):Promise<string>{
    try {
      const qrCodeBuffer=await QRCode.toBuffer(text);
      const filePath=path.join(__dirname,'../public/qr-codes',`${fileName}.png`);
      fs.mkdirSync(path.dirname(filePath),{recursive:true}),
      fs.writeFileSync(filePath,qrCodeBuffer)
      
      return fileName;

    } catch (error) {
      throw new Error("Failed to generate of save QR code")
    }
   }
  async create(createTableDto: CreateTableDto) {
    const { restoran_id } = createTableDto;
    const restoran = await this.restoranModel.findById(restoran_id);
    if (!restoran) {
      throw new BadRequestException("Bunday restoran yoq");
    }
    const newTable=await this.tablesModel.create(createTableDto);
    const baseUrl=`${process.env.API_URL}:${process.env.PORT}/api/menu`;
    const link=`${baseUrl}/${restoran_id}/${newTable._id}`
    await this.generateQrCode(link,String(newTable._id));
    newTable.qr_code=link;
    await newTable.save()
    restoran.tables.push(newTable);
    await restoran.save();

    return {newTable};

  }

  findAll() {
    return this.tablesModel.find().populate('restoran_id');
  }

  findOne(id: string) {
    return this.tablesModel.findById(id);
  }

  update(id: string, updateTableDto: UpdateTableDto) {
    return this.tablesModel.findByIdAndUpdate(id,updateTableDto);
  }

  remove(id: string) {
    return ;
  }
}
