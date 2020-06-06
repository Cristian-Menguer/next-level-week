import express, { request } from 'express'
import { celebrate, Joi } from 'celebrate'


import PointController from './controllers/PointController'
import ItemController from './controllers/ItemController'

import multer from 'multer'
import multerConfig from './config/multer'

const routes = express.Router()

const upload = multer(multerConfig)

const pointController = new PointController()
const itemController = new ItemController()

routes.get('/item', itemController.index)
routes.get('/point', pointController.index)
routes.get('/point/:id', pointController.show)

routes.post(
    '/point',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required(),
            latitude: Joi.number().required(),
            longitude: Joi.number().required(),
            city: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required()

        })
    }, {
        abortEarly: false
    }),
    pointController.create)

export default routes