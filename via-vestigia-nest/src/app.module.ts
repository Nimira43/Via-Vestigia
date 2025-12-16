import { Module } from '@nestjs/common'
import { UserController } from './user/user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'sqlite',
    database: './app-db.sqlite',
    synchronize: true,
  })],
  controllers: [UserController],
  providers: [],
})
export class AppModule {}
