import { UserRepository, MemoryUserRepository } from './users.repository';

const implementations = [[MemoryUserRepository]];

// For infrastructure adapters, I like to use blackbox testing
// to test all the implementations. This ensures they all
// conform to the interface both in terms of signature
// and functionality.
describe.each(implementations)('UserRepository', (repoName) => {
  let repo: UserRepository;

  beforeEach(() => {
    repo = new repoName();
  });

  it('should get all users', () => {
    const users = repo.all();

    // I only want to assert this is a list with
    // items in it. If I coupled the test to the
    // number of users, test data, it would be very
    // brittle and require a lot of maintenance
    expect(users.length).toBeGreaterThan(0);
  });
});
