// coloumn
// id office_id product_name category picture price stock sold total_items description status(open,lock) is_deleted created_at updated_at

class productController {
    static async getProduct(req, res, next) {
        let { id,category,isTop } = req.query;
        let result = [];
        try {
            if (id) {
                result = sampleData.filter(el => el.id == id)
            } else {
                result = sampleData
            }
            res.send(result)
        } catch (error) {
            console.log('get product', error);
        }
    }

    static async insertProduct(req, res, next) {
        let { office_id,name,category,picture,price,stock,description,status } = req.body;
        try {
            
        } catch (error) {
            console.log('insert product', error);
        }
    }
    
    static async updateProduct(req, res, next) {
        let { office_id,name,category,picture,price,stock,description,status } = req.body;
        try {
            
        } catch (error) {
            console.log('update product', error);
        }
    }

    static async deleteProduct(req, res, next) {
        let id = req.query.id;
        try {
            
        } catch (error) {
            console.log('delete product', error);
        }
    }
}

let sampleData = [
    {
        id: 1,
        office_id: 5,
        product_name: 'dark grey  f30',
        category: 'Fashion',
        picture: 'https://c4.wallpaperflare.com/wallpaper/49/514/419/bmw-tuning-335i-f30-wallpaper-preview.jpg',
        price: '25',
        stock: 2,
        description: 'bmw f30',
        status: 'open',
        officeName: 'Ben Garage'
    },
    {
        id: 2,
        office_id: 5,
        product_name: 'bmw e46',
        category: 'Automotive',
        picture: 'https://imgx.gridoto.com/crop/26x82:682x451/700x465/photo/2021/10/04/whatsapp-image-2021-10-04-at-17-20211004062716.jpeg',
        price: '25',
        stock: 2,
        description: 'bmw e46 yellow',
        status: 'open',
        officeName: 'Ben Garage'
    },
    {
        id: 3,
        office_id: 5,
        product_name: 'silver bmw e46',
        category: 'Automotive',
        picture: 'https://www.desktopbackground.org/p/2011/06/04/213620_prior-design-bmw-3-series-sedan-cars-modified-e46-wallpapers_1600x1200_h.jpg',
        price: '25',
        stock: 2,
        description: 'bmw e46 with rims 18',
        status: 'open',
        officeName: 'Ben Garage'
    },
    {
        id: 4,
        office_id: 5,
        product_name: 'Black Cat',
        category: 'Automotive',
        picture: 'https://e1.pxfuel.com/desktop-wallpaper/787/561/desktop-wallpaper-full-bmw-cars-vertical.jpg',
        price: '25',
        stock: 2,
        description: '"The quick brown fox jumps over the lazy dog" is an English-language pangram – a sentence that contains all the letters of the alphabet. The phrase is commonly used for touch-typing practice, testing typewriters and computer keyboards, displaying examples of fonts, and other applications involving text where the use of all letters in the alphabet is desired.',
        status: 'open',
        officeName: 'Ben Garage'
    },
    {
        id: 5,
        office_id: 5,
        product_name: 'pagani',
        category: 'Automotive',
        picture: 'https://www.wsupercars.com/thumbnails-phone/Pagani/2022-Pagani-Huayra-NC-001.jpg',
        price: '25',
        stock: 2,
        description: 'bmw f30',
        status: 'open',
        officeName: 'Ben Garage'
    },
    {
        id: 6,
        office_id: 5,
        product_name: 'Pagani',
        category: 'Automotive',
        picture: 'https://cdn1-production-images-kly.akamaized.net/zKdqBMSkpB2_Xdc7Q2-JF38zObU=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2290887/original/036095800_1532505824-pagano.jpg',
        price: '25',
        stock: 2,
        description: 'blue carbon fiber pagani',
        status: 'open',
        officeName: 'Ben Garage'
    }
]

module.exports = productController