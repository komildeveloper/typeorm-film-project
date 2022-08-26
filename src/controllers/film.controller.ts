import { Request, Response, NextFunction } from 'express'

import { dataSource } from '../config/ormconfig'
import { Films } from '../entities/films.entity'

export const createFilm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, actorId } = req.body

  const createFilm = await dataSource
    .createQueryBuilder()
    .insert()
    .into(Films)
    .values({ title, actor: actorId })
    .returning(['id', 'title'])
    .execute()

  res.json(createFilm)
}
