import {
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  ManyToOne,
  ManyToMany
} from "typeorm";
import { Post } from "./Post";
import { Player } from "../core/Player";

@Entity()
@Tree("closure-table")
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  created_date: Date;

  @UpdateDateColumn()
  edited_date: Date;

  @TreeChildren()
  children: Comment[];

  @TreeParent()
  parent: Comment;

  @ManyToOne(type => Post, post => post.comments)
  post: Post;

  @ManyToOne(type => Player, player => player.comments)
  author: Player;

  @ManyToMany(type => Player)
  editor: Player;
}
