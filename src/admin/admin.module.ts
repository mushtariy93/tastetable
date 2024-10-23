import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { Admin, AdminSchema } from "./schemas/admin.schema"; // AdminSchema ni qo'shing
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Admin.name,
        schema: AdminSchema, // AdminService o‘rniga AdminSchema ishlating
      },
    ]),
    JwtModule.register({global:true})
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
