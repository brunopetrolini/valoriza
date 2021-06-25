/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentsController } from './controllers/CreateComplimentsController'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticate } from './middlewares/ensureAuthenticate'

const router = Router()

const createUserController = new CreateUserController()
router.post('/users', createUserController.handle)

const createTagsController = new CreateTagsController()
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagsController.handle)

const authenticateUserController = new AuthenticateUserController()
router.post('/login', authenticateUserController.handle)

const createComplimentsController = new CreateComplimentsController()
router.post('/compliments', ensureAuthenticate, createComplimentsController.handle)

export { router }
