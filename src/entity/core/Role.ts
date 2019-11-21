import {
  JoinTable,
  ManyToMany,
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn
} from "typeorm";
import { Permission } from "./Permission";

@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column()
  prefix: string;

  @Column()
  suffix: string;

  @ManyToMany(type => Permission)
  @JoinTable()
  permissions: Permission[];
}
