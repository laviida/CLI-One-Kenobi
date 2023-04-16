export const entity = `import { ApiProperty } from '@nestjs/swagger';
import { AbstractEntity } from '@core/database/entity/abstract.entity';

import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class [entity] extends AbstractEntity  {
}

export enum [entity]FilterBy {
  id = 'id',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

`;
