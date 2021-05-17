import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getHello(): {} {
    return {
      ok: "tipo",
      type: "casa"
    };
  }

  getOk(): string {
    return 'Ok!';
  }
}
