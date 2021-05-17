import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("/users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get("/")
  getHello(): {} {
    return this.userService.getHello();
  }

  @Get("/ok")
  getOk(): string {
    return this.userService.getOk();
  }
  
}
