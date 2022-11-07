import { PromService } from '@digikare/nestjs-prom';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @Inject(PromService) promServiceProperyInjection!: PromService;

  constructor(private readonly promServiceConstructorInjection: PromService) {
    console.log(
      'promService inside AppService constructor - ',
      this.promServiceProperyInjection,
    );
    console.log(
      'promServiceConstructorInjection inside AppService constructor - ',
      this.promServiceConstructorInjection,
    );
  }
  getHello(): string {
    return 'Hello World!';
  }
}
