// conjucntion between user and product (card, history, etc)
// coloumn
// id product_id user_id quantity status(card,history,waiting_for_payment) payment_code is_deleted created_at updated_at

class userProductController {
    static async getUserProduct(req, res, next) {
        try {
            return res.send([
                {
                    id: '1',
                    name: 'Ran',
                    age: '25'
                }
            ])
        } catch (error) {
            console.log('get userProduct', error);
        }
    }

    static async insertUserProduct(req, res, next) {
        let { office_id,name,category,picture,price,stock,description,status } = req.body;
        try {
            
        } catch (error) {
            console.log('insert userProduct', error);
        }
    }
    
    static async updateUserProduct(req, res, next) {
        let { office_id,name,category,picture,price,stock,description,status } = req.body;
        try {
            
        } catch (error) {
            console.log('update userProduct', error);
        }
    }

    static async deleteUserProduct(req, res, next) {
        let id = req.query.id;
        try {
            
        } catch (error) {
            console.log('delete userProduct', error);
        }
    }
}

module.exports = userProductController