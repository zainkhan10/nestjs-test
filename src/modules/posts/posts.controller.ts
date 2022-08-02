import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAll(): Promise<any> {
    return this.postsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.postsService.getOne(id);
  }
}
