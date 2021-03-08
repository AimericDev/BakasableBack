import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Player {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  nickname: string;

  @Column('simple-array')
  playedcharacters: string[];

  @Column('text')
  description: string;
}