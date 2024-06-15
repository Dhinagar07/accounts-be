// controller/account.js

class AccountController {
    static async createAccount(db, obj) {
      const accountCheck = await db.Account.findOne({ where: { name: obj.name } });
  
      if (accountCheck) {
        return false;
      }
  
      const account = await db.Account.create({
        name: obj.name,
        price: obj.price,
      });
  
      return account;
    }
  
    static async listAccounts(db) {
      const list = await db.Account.findAll();
      return list;
    }
  
    static async updateAccount(db, obj) {
        console.log(obj);
      const accountCheck = await db.Account.findOne({ where: { id: obj.id } });
  
      if (!accountCheck) {
        return false;
      }
  
      const account = await db.Account.update(
        {
          name:obj.name,
          price: obj.price,
        },
        {
          where: { id: obj.id },
        }
      );

       
      return account;
    }
    static async deleteAccount(db, id) {
        const accountCheck = await db.Account.findOne({ where: { id } });
    
        if (!accountCheck) {
          return false;
        }
    
        const account = await db.Account.destroy({
          where: { id },
        });
    
        return account;
      }
    
  
    
  }
  
  module.exports = AccountController;
  