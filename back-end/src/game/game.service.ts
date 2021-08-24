import { Injectable, Logger } from '@nestjs/common';
import { ScrambledCodeStageOne } from './fases/ScrambledCodeStageOne';
import { ScrambledCodeStageTwo } from './fases/ScrambledCodeStageTwo';

@Injectable()
export class GameService {
  private readonly logger: Logger;
  constructor() {
    this.logger = new Logger(this.constructor.name);
  }

  async getScrambledCode(stage: string): Promise<string[]> {
    this.logger.log(`Trying to get Scrambled Code to stage ${stage}...`);
    try {
      return await this.getScrambledCodeByStage(stage);
    } catch (e) {
      this.logger.log(
        `Error on trying to get Scrambled Code, Error code ${e.status.code}`,
      );
      throw new Error(
        `Error on trying to get Scrambled Code, Error code ${e.status.code}`,
      );
    }
  }

  async getScrambledCodeByStage(stage: string) {
    switch (stage) {
      case '1':
        return ScrambledCodeStageOne();
      case '2':
        return ScrambledCodeStageTwo();
      default:
        return ['Não encontrado!'];
    }
  }
}
