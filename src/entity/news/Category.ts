import { BaseEntity, Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Post } from "./Post";

@Entity()
export class Category extends BaseEntity {
  @PrimaryColumn()
  name: string;

  @OneToMany(type => Post, post => post.category)
  posts: Post[];
}
