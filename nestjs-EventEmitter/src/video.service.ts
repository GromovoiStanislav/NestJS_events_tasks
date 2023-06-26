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
    // console.log("result",result);
    // Вывод:
    // Publishing new video
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button
    // result [ 1, 2 ]
    // All done!

    // если была Error():
    // Publishing new video
    // ERROR [ExceptionsHandler] Error
    // {
    //   "statusCode": 500,
    //   "message": "Internal server error"
    // }



    // const result = await this.eventEmitter.emitAsync("video.created1", new VideoCreatedEvent(title));
    // console.log("result",result);
    // Вывод:
    // Publishing new video
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button
    // result [ 1, 2 ]
    // All done!

    // если была Error():
    // Publishing new video
    // 2. handling in doSomething... How to smash like button
    // ERROR [ExceptionsHandler] Error
    // {
    //   "statusCode": 500,
    //   "message": "Internal server error"
    // }





    // const result = this.eventEmitter.emit("video.created", new VideoCreatedEvent(title));
    // console.log("result",result);
    // Вывод:
    // Publishing new video
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button
    // result true
    // All done!

    // если была Error():
    // Publishing new video
    // ERROR [ExceptionsHandler] Error
    // {
    //   "statusCode": 500,
    //   "message": "Internal server error"
    // }



    // const result = this.eventEmitter.emit("video.created2", new VideoCreatedEvent(title));
    // console.log("result",result);
    // Вывод:
    // Publishing new video
    // result true
    // All done!
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button

    // если была Error():
    // Publishing new video
    // result true
    // All done!
    // throw new Error("Error")



    const result = this.eventEmitter.emit("video.created3", new VideoCreatedEvent(title));
    console.log("result",result);
    // Вывод:
    // Publishing new video
    // throw new Error()
    // 1. Notifying... How to smash like button
    // 2. handling in doSomething... How to smash like button
    //result true
    // All done!

    // если была Error():
    // Publishing new video
    // 2. handling in doSomething... How to smash like button
    // result true
    // All done!
    // throw new Error("Error")





    console.log("All done!");
    return "All done!";
  }
}
