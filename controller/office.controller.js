// coloumn
// id name address user_id(owner) type is_deleted created_at updated_at

class officeController {
    static async getOffice(req, res, next) {
        try {

        } catch (error) {
            console.log('get office', error);
        }
    }

    static async insertOffice(req, res, next) {
        let { name,address,user_id,type } = req.body;
        try {
            
        } catch (error) {
            console.log('insert office', error);
        }
    }
    
    static async updateOffice(req, res, next) {
        let { id_seller,name,address,birth_date,role } = req.body;
        try {
            
        } catch (error) {
            console.log('update office', error);
        }
    }

    static async deleteOffice(req, res, next) {
        let id = req.query.id;
        try {
            
        } catch (error) {
            console.log('delete office', error);
        }
    }
}

module.exports = officeController