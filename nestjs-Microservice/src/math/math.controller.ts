import { Controller, Get, Inject } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { MATH_SERVICE } from "../app.constants";


@Controller("math")
export class MathController {

  constructor(
    @Inject(MATH_SERVICE) private readonly client: ClientProxy
  ) {
  }

  // @Client({ transport: Transport.TCP})
  // client: ClientProxy;


  @Get()
  execute(): Observable<number> {
    const pattern = { cmd: "sum" };
    const data = [1, 2, 3, 4, 5];
    this.client.emit('sum', data);
    return this.client.send<number>(pattern, data);
  }




}
