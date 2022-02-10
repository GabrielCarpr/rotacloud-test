import { Injectable } from '@nestjs/common';
import * as types from 'types';

// I'm a big fan of the repository pattern to hide
// persistence details, and I do similar for other infrastructure.
// This makes it easy to swap out infrastructure implementations
// in the future (a common refactoring I've found with scaling)
// but also makes fast unit tests a lot simpler and easier.
//
// I usually make all implementations in pairs: the main, production
// version, and a memory version for testing. I use blackbox testing
// to ensure they both correctly implement the interface.
//
// Normally something like this would return an entity, where
// I can encapsulate behaviour alongside data, but in this instance
// for simplicity I'm just returning a POJO.
export interface UserRepository {
  all: () => types.User[];
}

@Injectable()
export class MemoryUserRepository implements UserRepository {
  private users: types.User[] = [
    {
      id: 1,
      firstName: 'Oliver',
      lastName: 'Gartland',
    },
    {
      id: 2,
      firstName: 'Anna',
      lastName: 'Watts',
    },
    {
      id: 3,
      firstName: 'Andy',
      lastName: 'Brown',
    },
    {
      id: 4,
      firstName: 'Maisie',
      lastName: 'Curtis',
    },
    {
      id: 5,
      firstName: 'Jonathan',
      lastName: 'Curtis',
    },
    {
      id: 6,
      firstName: 'Jonathan',
      lastName: 'Wright',
    },
    {
      id: 7,
      firstName: 'Jennifer',
      lastName: 'Tomkinson',
    },
    {
      id: 8,
      firstName: 'Rich',
      lastName: 'Richman',
    },
  ];

  all(): types.User[] {
    return this.users;
  }
}
