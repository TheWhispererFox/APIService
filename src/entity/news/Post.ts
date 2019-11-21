import {
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { Player } from "../core/Player";
import { Tag } from "./Tag";
import { Category } from "./Category";
import { Comment } from "./Comment";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  edited_date: Date;

  @ManyToOne(type => Player, player => player.posts)
  author: Player;

  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[];

  @ManyToOne(type => Category, category => category.posts)
  category: Category;

  @ManyToMany(type => Player)
  @JoinTable()
  likes: Player[];

  @ManyToMany(type => Player)
  @JoinTable()
  dislikes: Player[];

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[];
}
