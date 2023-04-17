const products = [
    {
        id: 1,
        image:"https://img.freepik.com/premium-photo/white-cup-latte-coffee-isolated-white-background-file-contains-with-clipping-path-so-easy-work_24076-852.jpg?w=2000",
        title: 'Coffee',
        price:20.99
    },
    {
        id: 2,
        image:"https://static-01.daraz.pk/p/bc2bad088c7bc9eac8607526f14ac098.jpgg",
        title: 'Jacket',
        price:120.99
    },
    {
        id: 3,
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