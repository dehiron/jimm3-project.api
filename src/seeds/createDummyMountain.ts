import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import {Mountain} from '../entity/Mountain'
const mountainData = require('./mountains.json')

export default class CreateMountains implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<any> {
        
        await connection
            .createQueryBuilder()
            .insert()
            .into(Mountain)
            .values(mountainData)
            .execute()

    }
}