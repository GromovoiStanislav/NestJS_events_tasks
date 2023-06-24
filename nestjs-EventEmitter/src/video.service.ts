import { Injectable } from "@nestjs/common";
import { EventEmitter2 } from "@nestjs/event-emitter";
import { VideoCreatedEvent } from "./video-created.event";

@Injectable()
export class VideoService {

  constructor(
    private eventEmitter: EventEmitter2
  ) {
  }

  async publish(): Promise<string> {
    const title = "How to smash like button";
    console.log("Publishing new video");

    // const result = await this.eventEmitter.emitAsync("video.created", new VideoCreatedEvent(title));
    // console.log(result);
    // Вывод:
    // Publishing new video
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button
    // [ 1, 2 ]
    // All done!




    //this.eventEmitter.emit("video.created", new VideoCreatedEvent(title));
    // Вывод:
    // Publishing new video
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button
    // All done!


    this.eventEmitter.emit("video.created2", new VideoCreatedEvent(title));
    // Вывод:
    // Publishing new video
    // All done!
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button


    console.log("All done!");
    return "All done!";
  }
}
