const expect = require('expect');
const  {Users} = require('./users');


describe('Users', () => {

    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'jj',
            room: 'Node course'
        },{
            id: '2',
            name: 'joe',
            room: 'React course'
        },{
            id: '3',
            name: 'fred',
            room: 'Node course'
        }]
    });

   it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Mark',
            room: 'Saturn'
        };
        var resUser = users.addUser(user.id, user.name, user.room);
        expect(users.users).toEqual([user]);
   });

   it('should remove a user', () => {
        var userId = users.users[0].id;
        var user = users.removeUser(userId);
        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
   });

   it('should not remove user', () => {
       var userId = '99';
       var user = users.removeUser(userId);
       expect(user).toNotExist();
       expect(users.users.length).toBe(3);
   });

   it('should find user', () => {
       var userId = users.users[0].id;
       var user = users.getUser(userId);
       expect(user.id).toBe(userId);
   });

   it('should not find user', () => {
       var userId = '51';
       var user = users.getUser(userId);
       expect(user).toNotExist();
   });

   it('should return names for node course', () => {
        var userList = users.getUserList(users.users[0].room);
        expect(userList).toEqual([users.users[0].name, users.users[2].name]);
   });

    it('should return names for react course', () => {
        var userList = users.getUserList(users.users[1].room);
        expect(userList).toEqual([users.users[1].name]);
    });

});