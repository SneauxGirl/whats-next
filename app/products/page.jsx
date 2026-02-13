export const generateStaticParams = async () => {
    const products = await fetch ('https://fakestoreapi.com/products').then(response => response.json());
    return products.map(product => ({ id: product.id.toString() }))
}

export const ProductsPage = async () => {
    const products = await fetch ('https://fakestoreapi.com/products').then(response => response.json());

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ProductsPage;