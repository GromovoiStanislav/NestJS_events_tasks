import { Module } from "@nestjs/common";
import { MathModule } from "./math/math.module";
import { AppController } from "./app.controller";
import { OtherModule } from "./other/other.module";

@Module({
  imports: [MathModule, OtherModule],
  controllers: [AppController]
})
export class AppModule {
}
