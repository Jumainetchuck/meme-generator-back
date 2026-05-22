import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEtudiantDTO {
  @IsString({
    message: 'le prenom doit etre une chaine de caracteres',
  })
  @IsNotEmpty({
    message: 'le prenom ne doit pas etre vide',
  })
  @ApiProperty({
    description: 'le prenom de l\'etudiant',
    example: 'Jean',
    required: true,
  })
  firstName!: string;

  @IsString({
    message: 'le nom doit etre une chaine de caracteres',
  })
  @IsNotEmpty({
    message: 'le nom ne doit pas etre vide',
  })
  @ApiProperty({
    description: 'le nom de l\'etudiant',
    example: 'Dupont',
    required: true,
  })
  lastName!: string;

  @IsString({
    message: "l'email doit etre une chaine de caracteres",
  })
  @IsNotEmpty({
    message: "l'email ne doit pas etre vide",
  })
  @IsEmail(
    {},
    {
      message: "l'adresse email n'est pas valide!!",
    },
  )
  @ApiProperty({
    description: "l'email de l'etudiant",
    example: 'jean.dupont@supinfo.com',
    required: true,
  })
  email!: string;
}
