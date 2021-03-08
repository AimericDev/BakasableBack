import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Player } from './player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private PlayersRepository: Repository<Player>,
  ) {}

  async findAll(): Promise<Player[]> {
    return this.PlayersRepository.find();
  }

  async findOne(id: number): Promise<Player> {
    return this.PlayersRepository.findOne(id);
  }

  async create(player: Player): Promise<Player> {
    return await this.PlayersRepository.save(player);
  }

  async update(id: number, player: Player): Promise<UpdateResult> {
    return await this.PlayersRepository.update(id, player);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.PlayersRepository.delete(id);
  }
}