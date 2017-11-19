const user = {
    insert: 'INSERT INTO user(name, password) VALUES(?,?)',
    update: 'update user set password=? where name=?',
    delete: 'delete from user where name=?',
    queryByName: 'select * from user where name=?',
    queryAll: 'select * from user'
};

module.exports = user;