import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateUserDTO {

    // firstname
    @IsString({
        message: "le nom doit etre une chaine de caracteres",
    })
    @IsNotEmpty({
        message: "le nom ne doit pas etre vide",
    })
    @ApiProperty({
        description: "le nom de l'utilisateur",
        example: "ETCHUCK",
        required: true,
    })
    firstName!: string;


    // lastname
    @IsString({
        message: "le prenom doit etre une chaine de caracteres",
    })
    @IsNotEmpty({
        message: "le prenom ne doit pas etre vide",
    })
    @ApiProperty({
        description: "le prenom de l'utilisateur",
        example: "Jumain",
        required: true,
    })
    lastName!: string;


    // email
    @IsString({
        message: "l'email doit etre une chaine de caracteres",
    })
    @IsNotEmpty({
            message: "l'email ne doit pas etre vide",
    })
    @IsEmail({
            blacklisted_chars: "!?()[]*^#$&",
        },
        {
            message: "l'adresse email n'est pas valide!!",
        },
    )
    @ApiProperty({
        description: "l'email de l'utilisateur",
        example: "jumain@gmail.com",
        required: true,
    })
    email!: string;

    // password
    @IsString({
        message: "le mot de passe doit etre une chaine de caracteres",
    })
    @IsNotEmpty({
        message: "le mot de passe ne doit pas etre vide",
    })
    @MinLength(8, {
        message: "le mot de passe doit contenir au moins 8 caracteres",
    })
    @ApiProperty({
        description: "le mot de passe de l'utilisateur",
        example: "Ju2-!m00000ain",
        required: true,
    })
    password!: string;
}