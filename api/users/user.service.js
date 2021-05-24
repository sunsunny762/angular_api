const pool = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into products(name, description, price, imageUrl, rating) 
                values(?,?,?,?,?)`,
      [
        data.name,
        data.description,
        data.price,
        "product.jpg",
        5
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createList: (data, callBack) => {
    console.log(data);
    pool.query(
      `insert into userList(userId, productId) 
                values(?,?)`,
      [
        data.userId,
        data.productId,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  deleteList: (data, callBack) => {
    pool.query(
      `delete from userList where userId = ? and productId = ? 
                values(?,?)`,
      [
        data.userId,
        data.productId,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getList: (id, callBack) => {
    pool.query(
      `select DISTINCT(p.id), p.* from products p inner Join userList u on p.id = u.productId  where u.userId = ? group by p.id`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    pool.query(
      `select * from registration where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getProductById: (id, callBack) => {
    pool.query(
      `select * from products where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getProducts: callBack => {
    pool.query(
      `select * from products where status = 1`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateProduct: (data, callBack) => {
    pool.query(
      `update products set name=?, description=?, price=? where id = ?`,
      [
        data.name,
        data.description,
        data.price,
        data.id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteProduct: (id, callBack) => {
    pool.query(
      `update products set status=0 where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};
