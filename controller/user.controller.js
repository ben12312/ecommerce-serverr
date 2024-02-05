
// coloumn
// id name address birth_date role(admin,seller,customer) seller_permission is_deleted created_at updated_at
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
            console.log('get', error);
        }
    }

    static async insert(req, res, next) {
        try {
            
        } catch (error) {
            console.log('insert', error);
        }
    }
}

module.exports = userController