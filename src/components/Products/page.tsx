const Product = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-green-500 font-semibold">${product.price}</p>
    </div>
  );
};

export default Product;
