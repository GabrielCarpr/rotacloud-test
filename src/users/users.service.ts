import { Inject, Injectable } from '@nestjs/common';
import * as types from 'types';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository') private readonly users: UserRepository,
  ) {}

  // I'd normally put application logic at this layer,
  // sorting would normally be a persistence concern too.
  // I've instead put it here as there is no other application
  // logic. I also didn't want to put the sorting in the controller
  // as it's not a HTTP concern. In the future we may want to use a
  // ports and adapters type architecture, and use this service method
  // with another interface, such as a CLI, a HTML page, a GraphQL query etc.
  //
  // Similar to what I said on the user repository, this also won't
  // scale much beyond 8 users. We can't retrieve all users
  // to sort them in the application, this needs to be done in persistence.
  // Further, we also can't be retrieving all users. If we want an endpoint
  // to view all users, we should paginate it, ideally cursor based.
  //
  // I'm retrieving user entities from a repository here. Normally
  // for read endpoints I'd opt to defer to an encapsulated persistence
  // query, but for the purposes of the example this is fine.
  getUsers(): types.User[] {
    const users = this.users.all();

    return users.sort((a, b) => {
      const sortKey = (user: types.User) => {
        return (user.firstName + user.lastName).toLowerCase();
      };

      return sortKey(a) >= sortKey(b) ? 1 : -1;
    });
  }
}
