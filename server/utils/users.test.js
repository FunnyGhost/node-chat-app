const { Users } = require('./users');

describe('Users', () => {
  const user1 = {
    id: 1,
    name: 'Catalin',
    room: 'Humans'
  };
  const user2 = {
    id: 2,
    name: 'Andra',
    room: 'Humans'
  };
  const user3 = {
    id: 3,
    name: 'Koda',
    room: 'Pets'
  };
  const inexistentUserId = 5;

  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [user1, user2, user3];
  });

  it('should add new user', () => {
    const users = new Users();
    const userToTest = {
      id: 1,
      name: 'Catalin',
      room: 'Batman rules'
    };

    const responseUser = users.addUser(userToTest.id, userToTest.name, userToTest.room);

    expect(responseUser).toEqual(userToTest);
    expect(users.users).toEqual([userToTest]);
  });

  it('should return the users in a room', () => {
    const response = users.getUserList('Humans');

    expect(response).toEqual(['Catalin', 'Andra']);
  });

  it('should remove a user if it is in the list', () => {
    const response = users.removeUser(user1.id);

    expect(users.users).toEqual([user2, user3]);
    expect(response).toEqual(user1);
  });

  it('should not remove a user if it is not in the list', () => {
    users.removeUser(inexistentUserId);

    expect(users.users).toEqual([user1, user2, user3]);
  });

  it('should get the user', () => {
    const response = users.getUser(user1.id);

    expect(response).toEqual(user1);
  });

  it('should not return the user if it is not in the list', () => {
    const response = users.getUser(inexistentUserId);

    expect(response).toBeFalsy();
  });
});
