import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { VideoCreatedEvent } from "./video-created.event";


@Injectable()
export class ViewerService {

  @OnEvent("video.created")
  notify({ title }: VideoCreatedEvent) {
    console.log("1. Notifying...", title);
    return 1;
  }


  @OnEvent("video.created")
  doSomething({ title }: VideoCreatedEvent) {
    console.log("2. handling in doSomething...", title);
    return 2;
  }


  @OnEvent("video.created2", { async: true })
  notify2({ title }: VideoCreatedEvent) {
    console.log("1. Notifying...", title);
  }


  @OnEvent("video.created2", { async: true })
  doSomething2({ title }: VideoCreatedEvent) {
    console.log("2. handling in doSomething...", title);
  }


}
