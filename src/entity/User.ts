import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// This entity is just example and will be deleted in future
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}
