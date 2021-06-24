/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'

const router = Router()

const createUserController = new CreateUserController()
router.post('/users', createUserController.handle)

const createTagsController = new CreateTagsController()
router.post('/tags', ensureAdmin, createTagsController.handle)

export { router }
