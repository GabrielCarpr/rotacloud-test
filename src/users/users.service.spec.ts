import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import * as types from 'types';
import { MemoryUserRepository } from './users.repository';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'UserRepository',
          useClass: MemoryUserRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return list of users', () => {
    const users = service.getUsers();

    // I only want to check this is a list, by it
    // having a length greater than 0
    // I don't want to couple this test to a specific
    // length as it's likely this may change and
    // will increase test maintainability
    expect(users.length).toBeGreaterThan(0);
  });

  it.only('should return a sorted list of users', () => {
    const users = service.getUsers();

    const getFullName = (user: types.User) => {
      return (user.firstName + user.lastName).toLowerCase();
    };

    // Rather than asserting a specific ordering of the test data,
    // let's actually check they're sorted, as the test data may be
    // variable
    expect(
      users.every((user, index, collection) => {
        if (index === 0) {
          // First in the array, we can't compare with the previous
          return true;
        }

        return getFullName(user) <= getFullName(collection[index - 1]);
      }),
    ).toBe(true);
    // This could be improved somewhat so that when the test fails,
    // we get a better message than `expected false to be true`,
    // however I can't find a way without adding a dependency
  });
});
