import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Menu } from './schemas/menu.schema';
import { Model } from 'mongoose';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name)private menuModel:Model<Menu>){}
  create(createMenuDto: CreateMenuDto) {
    return this.menuModel.create(createMenuDto);
  }

  findAll() {
    return this.menuModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
