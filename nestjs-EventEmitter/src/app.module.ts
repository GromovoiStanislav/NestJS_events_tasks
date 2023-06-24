import { Module } from "@nestjs/common";
import { VideoController } from "./video.controller";
import { VideoService } from "./video.service";
import { ViewerService } from "./viewer.service";
import { EventEmitterModule } from "@nestjs/event-emitter";

@Module({
  imports: [
    EventEmitterModule.forRoot()
  ],
  controllers: [VideoController],
  providers: [VideoService, ViewerService]
})
export class AppModule {
}
