import ProductList from '../components/ProductList';

const products = [
  { id: 1, name: 'Product 1', description: 'Description of product 1', price: 100 },
  { id: 2, name: 'Product 2', description: 'Description of product 2', price: 200 },
  { id: 3, name: 'Product 3', description: 'Description of product 3', price: 300 },
];

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
