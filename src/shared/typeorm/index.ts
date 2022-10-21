import { DataSource } from 'typeorm'
import { CreateRolesTable1666381127031 } from './migrations/1666381127031-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1666381127031],
})
