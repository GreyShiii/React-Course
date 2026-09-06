import Card from "./Card"

export default function ProductList() {
    const products = [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 25 },
        { id: 3, name: "Keyboard", price: 75 },
        { id: 4, name: "Monitor", price: 300 },
    ]

    return (
        <div>
            <h2>Products</h2>
                { products.map((product) => (
                    <Card
                        key={product.id}
                        title={product.name}
                        description={`$${product.price}`}
                        color={"green"}
                    />
                )) }
        </div>
    )
}