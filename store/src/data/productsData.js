// coffee: 
// jacket: 
// macbook: 
const products = [
    {
        id: 'price_1MycSDD2171rDQ1bnbM18dAH',
        image:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/coffee-4.jpg",
        title: 'Coffee',
        price:20.99
    },
    {
        id: 'price_1MycUvD2171rDQ1bKnBShmm8',
        image:"https://hawkbull.pk/wp-content/uploads/2021/12/IMG_5177-1000x1000.jpg",
        title: 'Jacket',
        price:120.99
    },
    {
        id: 'price_1MycVnD2171rDQ1b7o7lE0jc',
        image:"https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/_/a/_apple-macbook-air-m2_-myshop-pk-6_2.jpg",
        title: 'Macbook',
        price:1200.00
    },
]

// function to get specific data

const getProductData = (id) => {
    let productData = products.find(product => product.id === id);
    if (productData === undefined) {
        console.log('no matching id found')
        return undefined;
    }
    
    return productData;
}

export { products,getProductData };