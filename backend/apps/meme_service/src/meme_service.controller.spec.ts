import { Test, TestingModule } from '@nestjs/testing';
import { MemeServiceController } from './meme_service.controller';
import { MemeServiceService } from './meme_service.service';

describe('MemeServiceController', () => {
  let controller: MemeServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemeServiceController],
      providers: [
        {
          provide: MemeServiceService,
          useValue: {
            addEtudiant: jest.fn(),
            removeEtudiant: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<MemeServiceController>(MemeServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
