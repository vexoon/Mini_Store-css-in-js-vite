import Product from "./Product";

function ProductList(props) {
    const {product} = props;

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 300px))",
            justifyContent: "center",
            gap: "20px",
            }}>
            {product && product.map((item, index) => (
                <Product key={index} product={item} />
            ))}
        </div>
    )

}

export default ProductList;