import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Tables } from '../../tables/schemas/table.schema';

export type ReservationDocument = HydratedDocument<Reservation>;

@Schema({ versionKey: false })
export class Reservation {
 

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tables',
  })
  table_id: Tables;

  @Prop()
  reservation_time: string;

  @Prop()
  guests_amount: number;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation);
