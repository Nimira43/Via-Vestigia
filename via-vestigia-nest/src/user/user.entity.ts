import { Entity } from 'typeorm'

@Entity()
export class User {
  id: number
  name: string
  handle: string
  email: string
}