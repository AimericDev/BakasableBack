import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PlayersService } from "./players.service";
import { PlayersController } from "./players.controller";
import { Player } from "./player.entity";

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  providers: [PlayersService],
  controllers: [PlayersController],
  exports: [TypeOrmModule]
})

export class PlayersModule {}
