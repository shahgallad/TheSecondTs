import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Вывести список пользователей: ./userlist \nДобавить пользователя: ./userlist/adduser';
  }
}
