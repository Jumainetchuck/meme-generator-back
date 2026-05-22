import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateEtudiantDTO } from './dto/create-etudiant.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class MemeServiceService {
  constructor(private readonly prisma: PrismaService) {}

  async addEtudiant(createEtudiantDTO: CreateEtudiantDTO) {
    const { firstName, lastName, email } = createEtudiantDTO;

    const existing = await this.prisma.etudiant.findUnique({
      where: { email },
    });

    if (existing) {
      throw new ConflictException(
        'un etudiant avec cet email existe deja',
      );
    }

    return this.prisma.etudiant.create({
      data: { firstName, lastName, email },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        createdAt: true,
      },
    });
  }

  async removeEtudiant(id: number) {
    const etudiant = await this.prisma.etudiant.findUnique({
      where: { id },
    });

    if (!etudiant) {
      throw new NotFoundException(`etudiant avec l'id ${id} introuvable`);
    }

    await this.prisma.etudiant.delete({ where: { id } });

    return { message: 'etudiant supprime avec succes', id };
  }
}
