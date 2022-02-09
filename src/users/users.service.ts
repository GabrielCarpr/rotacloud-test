import { Injectable } from '@nestjs/common';

export class UsersService {
  getUsers(): any {
    return [
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
  }
}
