import { Request, Response, NextFunction } from 'express'

import { dataSource } from '../config/ormconfig'
import { Actors } from '../entities/actors.entity'

dataSource
  .initialize()
  .then(() => console.log('Connected'))
  .catch((err) => console.log(err.message))

export const getActors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const getActors = await dataSource.getRepository(Actors).find({
    relations: {
      films: true,
    },
  })

  res.json(getActors)
}

export const createActor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, age } = req.body

  const createActor = await dataSource
    .createQueryBuilder()
    .insert()
    .into(Actors)
    .values({ name, age })
    .returning(['id', 'name'])
    .execute()

  res.json(createActor)
}

export const updateActor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { name, age } = req.body

  const updateActor = await dataSource
    .createQueryBuilder()
    .update(Actors)
    .set({ name, age })
    .where('id = :id', { id })
    .returning(['id', 'name'])
    .execute()

  res.json(updateActor)
}

export const deleteActor = async (req: Request, res: Response) => {
  const { id } = req.params

  const deleteActor = await dataSource
    .createQueryBuilder()
    .delete()
    .from(Actors)
    .where('id = :id', { id })
    .returning(['id'])
    .execute()

  res.json(deleteActor)
}
