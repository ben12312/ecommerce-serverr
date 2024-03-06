const { sendResponse } = require('../helper/helper')
// coloumn
// id first_name last_name email password address birth_date role(Admin,Seller,Customer) seller_permission is_deleted created_at updated_at
let sampleUser = [
    {
        id: '1',
        first_name: 'Ran',
        last_name: 'Mate',
        // age: '25',
        role: 'Seller',
        seller_permission: true,
        office_name: 'Toserba'
    }
]
class userController {
    static async getUser(req, res, next) {
        try {
            sendResponse(res,200,'success login',sampleUser)
        } catch (error) {
            console.log('get user', error);
        }
    }

    static async login(req, res, next) {
        let { email,password } = req.body;
        try {
            sendResponse(res,200,'success login',sampleUser[0])
        } catch (error) {
            console.log('login', error);
        }
    }

    static async registerUser(req, res, next) {
        let { firstName,lastName,email,password,role } = req.body;
        // console.log(req.body);
        try {
            sendResponse(res,200,'success register',null)
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