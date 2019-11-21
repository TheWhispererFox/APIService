import { BaseEntity, Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Permission extends BaseEntity {
  @PrimaryColumn()
  node: string;

  @Column()
  name: string;

  @Column()
  desc: string;
}
