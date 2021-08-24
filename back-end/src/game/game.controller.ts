import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('/game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/scrambled-code')
  async getScrambledCode(@Query('stage') stage: string): Promise<string[]> {
    return await this.gameService.getScrambledCode(stage);
  }
}
