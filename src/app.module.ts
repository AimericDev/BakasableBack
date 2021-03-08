import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayersController } from './player/players.controller';
import { Player } from './player/player.entity';
import { PlayersModule } from "./player/players.module";
import { PlayersService } from './player/players.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'pifpafpouf',
      entities: [Player],
      synchronize: true,
    }),
    PlayersModule
  ],
  controllers: [AppController, PlayersController],
  providers: [AppService, PlayersService],
})
export class AppModule {}
