import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'guards/jwt-auth.guard';
import { GameReviewService } from 'modules/game/game-review.service';

import {
  addCommentDto,
  commentListDto,
  doLikeOnCommentDto,
  getCommentDto,
  getRatingDto,
  giveRatingDto,
  reportCommentDto,
} from './dtos';

@ApiTags('Game - Review')
@Controller('game/review')
export class GameReviewController {
  constructor(private gameReviewService: GameReviewService) {}

  @ApiOperation({
    summary: 'Get review list',
    description: 'Limit: 20 times / 1 min',
  })
  @Get('list')
  async getReviewList(@Query() query: commentListDto) {
    const { user_id, game_id, comment_id, page, page_size, sort } = query;

    return await this.gameReviewService.getReviewList(
      user_id,
      game_id,
      comment_id,
      page,
      page_size,
      sort,
    );
  }

  @ApiOperation({
    summary: 'Add a review',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('add')
  @UseGuards(JwtAuthGuard)
  async addComment(@Request() req: any, @Body() body: addCommentDto) {
    const { game_id, comment_id, text } = body;

    return await this.gameReviewService.addComment(
      req.user,
      game_id,
      comment_id,
      text,
    );
  }

  @ApiOperation({
    summary: 'Tick a like',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('like')
  @UseGuards(JwtAuthGuard)
  async doLike(@Request() req: any, @Body() body: doLikeOnCommentDto) {
    const { comment_id } = body;

    return await this.gameReviewService.doLike(req.user, comment_id);
  }

  @ApiOperation({
    summary: 'Get a comment',
    description: 'Limit: 20 times / 1 min',
  })
  @Get('comment')
  async getComment(@Query() query: getCommentDto) {
    const { id } = query;

    return await this.gameReviewService.getCommentById(id);
  }

  @ApiOperation({
    summary: 'Tick a rating',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('rating')
  @UseGuards(JwtAuthGuard)
  async giveRating(@Request() req: any, @Body() body: giveRatingDto) {
    const { game_id, rating } = body;

    return await this.gameReviewService.giveRatingByUserId(
      req.user.id,
      game_id,
      rating,
    );
  }

  @ApiOperation({
    summary: 'Get a rating status',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Get('rating')
  @UseGuards(JwtAuthGuard)
  async getRating(@Request() req: any, @Query() query: getRatingDto) {
    const { game_id } = query;

    return await this.gameReviewService.getRatingByUserId(req.user.id, game_id);
  }

  @ApiOperation({
    summary: 'Get rating statistics',
    description: 'Limit: 20 times / 1 min',
  })
  @Get('rating-statistics')
  async getRatingStatistics(@Query() query: getRatingDto) {
    const { game_id } = query;

    return await this.gameReviewService.getGameRatingStatistics(game_id);
  }

  @ApiOperation({
    summary: 'Report a comment',
    description: 'Limit: 10 times / 1 min',
  })
  @ApiBearerAuth()
  @Post('report')
  @UseGuards(JwtAuthGuard)
  async reportComment(@Request() req: any, @Body() body: reportCommentDto) {
    const { comment_id, reason } = body;

    return await this.gameReviewService.reportCommentByUserId(
      req.user,
      comment_id,
      reason,
    );
  }
}
