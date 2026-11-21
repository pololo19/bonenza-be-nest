import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Game, GameReviewComment, GameReviewRating, User } from 'entities';
import { ENUM_COMMENT_SORT } from 'enums';
import { isExistGameRatingError, isExistGameReportError } from 'errors';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class GameReviewService {
  constructor(
    @InjectRepository(GameReviewComment)
    private GameReviewCommentRepository: Repository<GameReviewComment>,
    @InjectRepository(GameReviewRating)
    private GameReviewRatingRepository: Repository<GameReviewRating>,
    @InjectRepository(Game)
    private GameRepository: Repository<Game>,
  ) {}

  async addComment(
    user: User,
    game_id: string,
    comment_id: string | undefined,
    text: string,
  ) {
    if (comment_id !== undefined) {
      const _newComment: DeepPartial<GameReviewComment> = {
        user,
        game: await this.GameRepository.findOneBy({ id: game_id }),
        text,
        comment: await this.GameReviewCommentRepository.findOneBy({
          id: comment_id,
        }),
      };

      const newComment = await this.GameReviewCommentRepository.save(
        this.GameReviewCommentRepository.create(_newComment),
      );

      return {
        id: newComment.id,
        text: newComment.text,
        user_id: newComment.user.id,
        user_name: newComment.user.name,
        user_avatar: newComment.user.avatar,
        game_id: newComment.game.id,
        game_identifier: newComment.game.identifier,
        likes_count: newComment.likes.length,
        time: newComment.created_at,
        comment_id: newComment.comment.id,
      };
    } else {
      const _newComment: DeepPartial<GameReviewComment> = {
        user,
        game: await this.GameRepository.findOneBy({ id: game_id }),
        text,
      };

      const newComment = await this.GameReviewCommentRepository.save(
        this.GameReviewCommentRepository.create(_newComment),
      );

      return {
        id: newComment.id,
        text: newComment.text,
        user_id: newComment.user.id,
        user_name: newComment.user.name,
        user_avatar: newComment.user.avatar,
        game_id: newComment.game.id,
        game_identifier: newComment.game.identifier,
        likes_count: newComment.likes.length,
        time: newComment.created_at,
      };
    }
  }

  async getRatingByUserId(user_id: string, game_id: string) {
    const rating = await this.GameReviewRatingRepository.findOneBy({
      user: { id: user_id },
      game: { id: game_id },
    });

    return rating === null ? 0 : rating.rating;
  }

  async giveRatingByUserId(user_id: string, game_id: string, rating: number) {
    const isExisted = await this.GameReviewRatingRepository.findOneBy({
      user: { id: user_id },
      game: { id: game_id },
    });

    if (isExisted) {
      throw new HttpException(
        isExistGameRatingError.error,
        isExistGameRatingError.code,
      );
    }

    const _newRating: DeepPartial<GameReviewRating> = {
      user: { id: user_id },
      game: await this.GameRepository.findOneBy({ id: game_id }),
      rating,
    };

    const newRating = await this.GameReviewRatingRepository.save(
      this.GameReviewRatingRepository.create(_newRating),
    );

    return {
      game_id: newRating.game.id,
      rating: newRating.rating,
    };
  }

  async doLike(user: User, comment_id: string) {
    const isExisted =
      await this.GameReviewCommentRepository.createQueryBuilder()
        .where('id = :id', { id: comment_id })
        .andWhere(`likes @> ARRAY['${user.id}']::uuid[]`)
        .getOne();

    if (isExisted) {
      await this.GameReviewCommentRepository.createQueryBuilder()
        .update(GameReviewComment)
        .set({
          likes: () => `array_remove(likes, '${user.id}'::uuid)`,
        })
        .where('id = :id', { id: comment_id })
        .andWhere(`'${user.id}'::uuid = ANY(likes)`)
        .execute();
      return {
        like: false,
      };
    } else {
      await this.GameReviewCommentRepository.createQueryBuilder()
        .update(GameReviewComment)
        .set({
          likes: () => `array_append(likes, '${user.id}'::uuid)`,
        })
        .where('id = :id', { id: comment_id })
        .execute();
      return { like: true };
    }
  }

  async getCommentById(id: string) {
    return await this.GameReviewCommentRepository.createQueryBuilder('t_grc')
      .select([
        't_u.id as user_id',
        't_u.name as user_name',
        't_u.avatar as user_avatar',
        't_grc.text as text',
        't_grc.created_at as time',
        'COALESCE(array_length(t_grc.likes, 1), 0) as likes_count',
      ])
      .innerJoin(User, 't_u', 't_u.id = t_grc.user_id')
      .where('t_grc.id = :id', { id })
      .getRawOne();
  }

  async getReviewList(
    user_id: string,
    game_id: string,
    comment_id: string | undefined,
    page: number,
    page_size: number,
    sort: ENUM_COMMENT_SORT,
  ) {
    const result = await this.GameReviewCommentRepository.createQueryBuilder(
      't_grc',
    )
      .select('COUNT(*) As total_count')
      .innerJoin(User, 't_u', 't_u.id = t_grc.user_id')
      .where('t_grc.game_id = :game_id', { game_id })
      .andWhere(
        comment_id === undefined
          ? 't_grc.comment_id IS NULL'
          : `t_grc.comment_id = '${comment_id}'`,
      )
      .getRawOne();

    const total_count = Number(result.total_count);
    let total_page = Math.ceil(total_count / page_size);
    total_page = total_page === 0 ? 1 : total_page;

    //  sort
    let sort_text = 't_grc.created_at';
    if (sort === ENUM_COMMENT_SORT.Top_Comments) sort_text = 'comments_count';
    else if (sort === ENUM_COMMENT_SORT.Top_Likes) sort_text = 'likes_count';

    return {
      total_count,
      total_page,
      page,
      page_size,
      comments: await this.GameReviewCommentRepository.createQueryBuilder(
        't_grc',
      )
        .select([
          't_u.id as user_id',
          't_u.name as user_name',
          't_u.avatar as user_avatar',
          't_grc.id as id',
          't_grc.text as text',
          't_grc.created_at as time',
          'COALESCE(array_length(t_grc.likes, 1), 0) as likes_count',
          'COUNT(t_grc_1.id) as comments_count',
          `${
            user_id != undefined ? `'${user_id}' = ANY(t_grc.likes)` : 'false'
          } as like`,
        ])
        .innerJoin(User, 't_u', 't_u.id = t_grc.user_id')
        .leftJoin(GameReviewComment, 't_grc_1', `t_grc_1.comment_id = t_grc.id`)
        .where('t_grc.game_id = :game_id', { game_id })
        .andWhere(
          comment_id === undefined
            ? 't_grc.comment_id IS NULL'
            : `t_grc.comment_id = '${comment_id}'`,
        )
        .groupBy('t_u.id')
        .addGroupBy('t_u.name')
        .addGroupBy('t_u.avatar')
        .addGroupBy('t_grc.id')
        .addGroupBy('t_grc.text')
        .addGroupBy('t_grc.created_at')
        .addGroupBy('t_grc.likes')
        .orderBy(sort_text, 'DESC')
        .offset((page - 1) * page_size)
        .limit(page_size)
        .getRawMany(),
    };
  }

  async getGameRatingStatistics(game_id: string) {
    const ratings = await this.GameReviewRatingRepository.createQueryBuilder(
      't_grr',
    )
      .select(['t_grr.rating AS rating', 't_u.avatar AS user_avatar'])
      .innerJoin(User, 't_u', 't_u.id = t_grr.user_id')
      .where('t_grr.game_id = :game_id', { game_id })
      .getRawMany();

    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    const total_count = ratings.length;
    let total = 0;

    for (const rating of ratings) {
      const rating_number = Number(rating.rating);
      counts[rating_number] += 1;
      total += rating_number;
    }

    const avatars = ratings.slice(-5).map((rating) => rating.user_avatar);

    return {
      total_count,
      average_rating: total_count ? (total / total_count).toFixed(1) : 0,
      counts,
      avatars,
    };
  }

  async reportCommentByUserId(
    user_id: string,
    comment_id: string,
    reason: string,
  ) {
    const isExisted = await this.GameReviewCommentRepository.query(`
      SELECT *
      FROM "game_review_comment"
      WHERE EXISTS (
          SELECT *
          FROM jsonb_array_elements(report) AS elem
          WHERE elem->>'user_id' = '${user_id}'
      ) AND id = '${comment_id}'
    `);
    if (isExisted.length) {
      throw new HttpException(
        isExistGameReportError.error,
        isExistGameReportError.code,
      );
    } else {
      await this.GameReviewCommentRepository.createQueryBuilder()
        .update(GameReviewComment)
        .set({
          report: () =>
            `jsonb_insert(report, '{-1}', '{"user_id": "${user_id}", "reason": "${reason}"}')`,
        })
        .where('id = :id', { id: comment_id })
        .execute();
    }

    return {
      status: true,
    };
  }
}
