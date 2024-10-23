import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsPassportNumber, IsPhoneNumber, isString, IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "Nodira Yoldashova",
    description: "To`liq ism familiya",
  })
  @IsString()
  full_name: string;

  @ApiProperty({
    example: "nodira88@gmail.com",
    description: "email manziili",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: "+9989123456789",
    description: "Uz telefon raqami",
  })
  @IsPhoneNumber("UZ")
  phone_number: string;

  @ApiProperty({
    example: "Nodira88",
    description: "Telegram link",
  })
  @IsString()
  tg_link: string;

  @ApiProperty({
    example: "Nodira88",
    description: "Parol kiritish kerak",
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: "Nodira88",
    description: "parol qayta teriladi",
  })
  @IsString()
  confirm_password: string;

  @ApiProperty({
    example: "Nodira admin",
    description: "Admin haqida ma`lumotlar",
  })
  @IsString()
  description: string;
}
