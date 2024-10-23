import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type MenuCategoryDocument = HydratedDocument<Category>;

@Schema({ versionKey: false })
export class Category {
  
  @Prop({ type: Map, of: String })
  name: Map<string, string>;

  @Prop()
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);

