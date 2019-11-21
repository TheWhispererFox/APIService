import {
  CreateDateColumn,
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class PlayerName extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  displayname: string;

  @Column()
  prefix: string;

  @Column()
  suffix: string;

  @CreateDateColumn()
  changed_date: Date;
}
