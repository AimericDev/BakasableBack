import { Controller, Req, Get, Param, Post, Delete, Body, Put } from '@nestjs/common';
import { Request } from 'supertest';
import { Player } from './player.entity';
import { PlayersService } from './players.service';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  // GET all the players from database
  @Get()
  async findAll(@Req() request: Request): Promise<Player[]> {
    return this.playersService.findAll();
  }

  // GET a specific player with their ID
  @Get(':id')
  findOne(@Param('id') id ) : Promise<Player> {
    return this.playersService.findOne(id);
  }

  // CREATE a new player
  @Post()
  async create(@Body() player: Player) {
    return this.playersService.create(player);
  }

  // UPDATE a player in database with their ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() player: Player) {
    return this.playersService.update(id, player);
  }

  // DELETE a player with their ID
  @Delete(':id')
  async delete(@Param('id') id) {
    this.playersService.delete(+id);
  }

}
