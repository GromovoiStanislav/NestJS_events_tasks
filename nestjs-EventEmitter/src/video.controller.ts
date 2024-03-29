import { Controller, Post } from "@nestjs/common";
import { VideoService } from "./video.service";

@Controller("video")
export class VideoController {

  constructor(
    private readonly videoService: VideoService
  ) {
  }

  @Post()
  async createVideo(): Promise<string> {
    return this.videoService.publish();
  }
}
