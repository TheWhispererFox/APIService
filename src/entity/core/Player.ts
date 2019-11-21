import {
  CreateDateColumn,
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany
} from "typeorm";
import { Role } from "./Role";
import { Post } from "../news/Post";
import { Comment } from "../news/Comment";

@Entity()
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  uuid: string;

  @Column({ unique: true })
  login: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  registerDate: Date;

  @Column({ type: "float", default: 0 })
  rub: number;

  @Column({ type: "integer", default: 0 })
  cash: number;

  @ManyToMany(type => Role)
  @JoinTable()
  roles: Role[];

  @OneToMany(type => Post, post => post.author)
  posts: Post[];

  @OneToMany(type => Comment, comment => comment.author)
  comments: Comment;
}
