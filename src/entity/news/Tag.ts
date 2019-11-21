import {
  CreateDateColumn,
  BaseEntity,
  Entity,
  Column,
  PrimaryColumn
} from "typeorm";

@Entity()
export class Tag extends BaseEntity {
  @PrimaryColumn()
  name: string;
}
