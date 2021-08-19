import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getHello(): any {
    return this.userService.getHello();
  }

  @Get('/ok')
  getOk(): string {
    return this.userService.getOk();
  }

  @Get('/user')
  @HttpCode(200)
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}
