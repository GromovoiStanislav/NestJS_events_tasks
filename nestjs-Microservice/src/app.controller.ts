import { Controller, Get } from "@nestjs/common";
import { Transport, Client, ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';



@Controller()
export class AppController {

  @Client({ transport: Transport.TCP})
  client: ClientProxy;


  @Get()
  call(): Observable<string> {
    const pattern = { cmd: 'sayHi' };
    const data = '';
    this.client.emit('sayHi', Date.now());
    return this.client.send<string>(pattern, data);
  }

}