import { Injectable } from "@nestjs/common";
import { OnEvent } from "@nestjs/event-emitter";
import { VideoCreatedEvent } from "./video-created.event";


@Injectable()
export class ViewerService {

  @OnEvent("video.created")
  notify({ title }: VideoCreatedEvent) {
    throw new Error("Error")
    console.log("1. Notifying...", title);
    return 1;
  }

  @OnEvent("video.created")
  doSomething({ title }: VideoCreatedEvent) {
    console.log("2. handling in doSomething...", title);
    return 2;
  }


  @OnEvent("video.created1")
  async notify1({ title }: VideoCreatedEvent) {
    throw new Error("Error")
    console.log("1. Notifying...", title);
    return 1;
  }

  @OnEvent("video.created1")
  async doSomething1({ title }: VideoCreatedEvent) {
    console.log("2. handling in doSomething...", title);
    return 2;
  }


  @OnEvent("video.created2", { async: true })
  notify2({ title }: VideoCreatedEvent) {
    throw new Error("Error")
    console.log("1. Notifying...", title);
    return 1;
  }

  @OnEvent("video.created2", { async: true })
  doSomething2({ title }: VideoCreatedEvent) {
    console.log("2. handling in doSomething...", title);
    return 2;
  }


  @OnEvent("video.created3")
  async notify3({ title }: VideoCreatedEvent) {
    throw new Error("Error")
    console.log("1. Notifying...", title);
    return 1;
  }

  @OnEvent("video.created3")
  async doSomething3({ title }: VideoCreatedEvent) {
    console.log("2. handling in doSomething...", title);
    return 2;
  }

}
