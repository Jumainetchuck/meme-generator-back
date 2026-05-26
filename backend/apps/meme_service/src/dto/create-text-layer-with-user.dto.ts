import { CreateTextLayerDto } from './create-textLayer.dto';

export class CreateTextLayerWithUserDto extends CreateTextLayerDto {
  userId!: number;
}