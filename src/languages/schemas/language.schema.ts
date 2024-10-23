import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";

export type LanguageDocument = HydratedDocument<Language>;
@Schema()
export class Language {
  @Prop()
  name: string;

  @Prop()
  code: string;

//   @Prop({
//     type: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Menu",
//       },
//     ],
//   })
//   tables: Menu[];
}

export const LanguageSchema = SchemaFactory.createForClass(Language);

