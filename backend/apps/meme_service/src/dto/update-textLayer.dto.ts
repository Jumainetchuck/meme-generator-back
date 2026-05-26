import { PartialType } from '@nestjs/mapped-types';
import { CreateTextLayerDto } from './create-textLayer.dto';

export class UpdateTextLayerDto extends PartialType(
  CreateTextLayerDto,
) {}