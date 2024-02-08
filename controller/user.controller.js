
// coloumn
// id id_seller name address birth_date role(admin,seller,customer) seller_permission is_deleted created_at updated_at
class userController {
    static async getUser(req, res, next) {
        try {
            return res.send([
                {
                    id: '1',
                    name: 'Ran',
                    age: '25'
                }
            ])
        } catch (error) {
            console.log('get user', error);
        }
    }

    static async insertUser(req, res, next) {
        let { id_seller,name,address,birth_date,role } = req.body;
        try {
            
        } catch (error) {
            console.log('insert user', error);
        }
    }
    
    static async updateUser(req, res, next) {
        let { id_seller,name,address,birth_date,role } = req.body;
        try {
            
        } catch (error) {
            console.log('update user', error);
        }
    }

    static async deleteUser(req, res, next) {
        let id = req.query.id;
        try {
            
        } catch (error) {
            console.log('delete user', error);
        }
    }
}

module.exports = userController