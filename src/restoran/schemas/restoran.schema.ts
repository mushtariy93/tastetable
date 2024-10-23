import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Tables } from "../../tables/schemas/table.schema";
import { Manager } from "../../managers/schemas/manager.schema";

export type RestoranDocument = HydratedDocument<Restoran>;

@Schema()
export class Restoran {
  @Prop()
  name: string;

  @Prop()
  phone_number: string;

  @Prop()
  description: string;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tables",
      },
    ],
  })
  tables: Tables[];

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Manager",
      },
    ],
  })
  managers: Manager[];
}

export const RestoranSchema = SchemaFactory.createForClass(Restoran);
