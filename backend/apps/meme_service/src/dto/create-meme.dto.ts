import { IsString, Length, IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateMemeDto {

    @IsString({
        message: "le titre doit etre une chaine de caractere",
    })
    @Length(1, 255, {
        message: "le titre doit contenir entre 1 et 255 caracteres",
    })
    @IsNotEmpty({
            message: "le nom ne doit pas etre vide",
    })
    @ApiProperty({
        description: "le titre du meme",
        example: "mon prmier meme",
        required: true,
    })
    title!: string;


    @IsString({
        message: "l'image doit etre une chaine de caractere",
    })
    @Length(1, 255, {
        message: "l'image doit contenir entre 1 et 255 caracteres",
    })
    @IsNotEmpty({
            message: "l'image ne doit pas etre vide",
    })
    @ApiProperty({
        description: "l'image du meme",
        example: "https://example.com/image.jpg",
        required: true,
    })
    imageUrl!: string;
    
}