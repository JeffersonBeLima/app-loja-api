import { Injectable } from '@nestjs/common';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject(): any {
    let objeto = {
      id: 1,
      nome: "Leandro"
    }
    return objeto
  }
}
