import { Controller } from "@nestjs/common";
import { EventPattern, MessagePattern } from "@nestjs/microservices";

@Controller()
export class OtherController {

  @MessagePattern({ cmd: "sayHi" })
  sayHi(data: string) {
    return "Hi, I'm MicroService";
  }


  @EventPattern('sayHi')
  async sayHiEvent(data: Record<string, unknown>) {
    console.log("sayHi", data);
  }


  @MessagePattern({ cmd: "sum" })
  sum(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }

  @EventPattern("sum")
  async sumEvent(data: number[]) {
    console.log("sum", data);
  }

}