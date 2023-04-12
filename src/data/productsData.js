const products = [
    {
        id: 1,
        title: 'Coffee',
        price:20.99
    },
    {
        id: 2,
        title: 'Jacket',
        price:120.99
    },
    {
        id: 1,
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