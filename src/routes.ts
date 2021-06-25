/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentsController } from './controllers/CreateComplimentsController'
import { CreateTagsController } from './controllers/CreateTagsController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserReceiverComplimentsController } from './controllers/ListUserReceiverComplimentsController'
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticate } from './middlewares/ensureAuthenticate'

const router = Router()

const createUserController = new CreateUserController()
router.post('/users', createUserController.handle)

const listUserSendComplimentsController = new ListUserSendComplimentsController()
router.get('/users/compliments/send', ensureAuthenticate, listUserSendComplimentsController.handle)

const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController()
router.get('/users/compliments/receive', ensureAuthenticate, listUserReceiverComplimentsController.handle)

const createTagsController = new CreateTagsController()
router.post('/tags', ensureAuthenticate, ensureAdmin, createTagsController.handle)

const listTagsController = new ListTagsController()
router.get('/tags', ensureAuthenticate, listTagsController.handle)

const authenticateUserController = new AuthenticateUserController()
router.post('/login', authenticateUserController.handle)

const createComplimentsController = new CreateComplimentsController()
router.post('/compliments', ensureAuthenticate, createComplimentsController.handle)

export { router }
