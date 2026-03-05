import { DataSource } from 'typeorm'
import * as dotnev from 'dotenv'
import * as path from 'path'

const envFile = process.env.NODE_ENV === 'development' ? '.env.development.local' : '.env'

dotnev.config({
  path: path.resolve(__dirname, '..', envFile)
})

export default new DataSource({
  type: 'sqlite',
  database: process.env.DB_HOST,
  migrations: ['./database/migrations/*.ts'],
  logging: true,
})