import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): any {
    return {
      ok: 'tipo',
      type: 'casa',
    };
  }

  getOk(): string {
    return 'Ok!';
  }

  getUserById(id: string): string {
    return 'id';
  }
}
