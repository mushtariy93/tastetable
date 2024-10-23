import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from "./admin/admin.module";
import { RestoranModule } from "./restoran/restoran.module";
import { TablesModule } from "./tables/tables.module";
import { CategoriesModule } from "./categories/categories.module";
import { LanguagesModule } from "./languages/languages.module";
import { MenuModule } from "./menu/menu.module";
import { ManagersModule } from "./managers/managers.module";
import { ReservationsModule } from "./reservations/reservations.module";
import { AuthModule } from "./auth/auth.module";
import { ClientModule } from "./client/client.module";
import { StatusModule } from "./status/status.module";
import { PaymentsModule } from "./payments/payments.module";
import { WaiterModule } from "./waiter/waiter.module";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AdminModule,
    RestoranModule,
    TablesModule,
    MenuModule,
    LanguagesModule,
    CategoriesModule,
    ManagersModule,
    ReservationsModule,
    AuthModule,
    ClientModule,
    StatusModule,
    PaymentsModule,
    WaiterModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
