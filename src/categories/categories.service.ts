import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category, MenuCategoryDocument } from './schemas/category.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Language, LanguageDocument } from '../languages/schemas/language.schema';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Model } from 'mongoose';

@Injectable()
export class CategoriesService {
  @InjectModel(Category.name)
  private menuCategoryModel: Model<MenuCategoryDocument>;
  @InjectModel(Language.name) private languageModel: Model<LanguageDocument>;

  async create(createMenuCategoryDto: CreateCategoryDto) {
    const menu_category = await this.menuCategoryModel.findById(
      createMenuCategoryDto.id
    );
    const language = await this.languageModel.findById(
      createMenuCategoryDto.languageId
    );

    if (!language) {
      throw new NotFoundException("Bunday til topilmadi");
    }

    return this.menuCategoryModel.create(createMenuCategoryDto);
  }
  

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
