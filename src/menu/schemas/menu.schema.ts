import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
export type MenuDocument=HydratedDocument<Menu>
@Schema()
export class Menu {
  @Prop()
  name: string;

  @Prop()
  price: string;

  @Prop()
  description: string;
  @Prop()
  images_url: string;
  @Prop()
  status: boolean;


 
}

export const MenuSchema = SchemaFactory.createForClass(Menu);

