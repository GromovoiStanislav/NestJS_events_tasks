import { Injectable } from '@nestjs/common';
import { ViewerService } from "./viewer.service";

@Injectable()
export class VideoService {

  constructor(
    private readonly viewerService: ViewerService
  ) {}

  publish(): string {
    const title = "How to smash like button"
    console.log("Publishing new video");

    this.viewerService.notify(title)

    return 'All done!';
  }
}
