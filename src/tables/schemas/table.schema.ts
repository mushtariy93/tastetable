import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Mongoose } from "mongoose";
import { Restoran } from "../../restoran/schemas/restoran.schema";
import { Reservation } from "../../reservations/schemas/reservation.schema";

export type TablesDocument = HydratedDocument<Tables>;

@Schema()
export class Tables {
  @Prop()
  number: string;

  @Prop()
  amount: number;

  @Prop()
  qr_code: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restoran",
  })
  restoran_id: Restoran;

  @Prop({
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reservations",
      },
    ],
  })
  reservations: Reservation[];
}

export const TablesSchema = SchemaFactory.createForClass(Tables);
