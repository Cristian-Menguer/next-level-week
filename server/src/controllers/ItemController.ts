import { Request, Response } from 'express'
import knex from '../database/connection'

class ItemController {

    async index(request: Request, response: Response) {
    
        const items = await knex('item').select('*')

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                //image_url: (path.resolve(__dirname, '..', 'uploads', item.image))
                image_url: `http://192.168.0.129:3333/uploads/${item.image}`
            }
        })

        return response.json(serializedItems)
    }
}

export default ItemController