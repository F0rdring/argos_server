const mysql = require('mysql');
const $conf = require('../conf/db');
const $util = require('../util/util');
const $sql = require('./userSqlMapping');

const pool = mysql.createPool($util.extend({}, $conf.mysql));

module.exports = {
    add: (param) => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query($sql.insert, [param.name, param.password], (err, res) => {
                    err ? reject(err) : resolve(res);
                    connection.release();
                });
            });
        });
    },
    queryAll: () => {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                connection.query($sql.queryAll, (err, res) => {
                    err ? reject(err) : resolve(res);
                    connection.release();
                });
            });
        });
    }
};