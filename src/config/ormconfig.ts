import path from 'path'
import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 5432,
  password: process.env.TYPEORM_PASSWORD,
  database: 'postgres',
  username: process.env.TYPEORM_USERNAME,
  synchronize: true,
  entities: [path.join(__dirname, '..', 'entities', '*.entity.{ts,js}')],
})
