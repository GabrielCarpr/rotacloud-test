import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { MemoryUserRepository } from './users.repository';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRepository',
      // In reality we'd use a real persistence
      // implementation
      useClass: MemoryUserRepository,
    },
    UsersService,
  ],
})
export class UsersModule {}
