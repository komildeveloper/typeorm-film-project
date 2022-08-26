import { Router } from 'express'
import {
  getActors,
  createActor,
  deleteActor,
  updateActor,
} from '../controllers/actor.controller'
import { createFilm } from '../controllers/film.controller'

const router = Router()

router.route('/actors').get(getActors).post(createActor, createFilm)
router.route('/actors/:id').put(updateActor).delete(deleteActor)

export default router
