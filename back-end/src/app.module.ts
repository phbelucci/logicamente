import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [UserController, GameController],
  providers: [UserService, GameService],
})
export class AppModule {}
