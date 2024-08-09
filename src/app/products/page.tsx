import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bolu Jadul Bali - Our Products',
  description: 'Explore our delicious Bolu Jadul Bali products, and discover the secret of the original taste of the balinese traditional bakery',
};

const products = [
  { id: 1, name: 'Bolu Nanas Half 11 x 22 cm 1 layer', description: 'Bolu Original Dengan Topping Homemade Pinneapple jam', price: 100000, image: '../images/product/bolunanas11x22.webp' },
  { id: 2, name: 'Nougat Wijen 22x22cm', description: 'Bolu Original With Nougat and Sesame', price: 120000, image: '../images/product/nougatwijen.webp' },
  { id: 3, name: 'Bolu PANnas Lapis ( BOLU PANDAN ) 2 Layer 11 x 22 cm', description: 'Bolu Pandan Dengan Topping Homemade Pinneapple jam', price: 125000, image: '../images/product/boluPANnas.webp' },
];

function Home() {
  return (
    <div>
      <main className="min-h-screen flex items-center justify-center bg-gray-900 pt-40"> 
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto">
          {products.map(product => (
            <div key={product.id} className="bg-gray-800 text-white rounded-lg shadow-lg p-6">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
              <div className="text-3xl font-bold mb-4">Rp.{product.price.toLocaleString()}</div>
              <div className="text-lg mb-2">{product.name}</div>
              <p className="text-gray-400 mb-6">{product.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-4">
                Order Now
              </button>
              <ul className="text-sm">
                <li className="flex items-center mb-2">
                  <span className="mr-2">✔</span> Freshly Baked Cake
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">✔</span> Made With Love
                </li>
                <li className="flex items-center mb-2">
                  <span className="mr-2">✔</span> Easy To Find
                </li>
              </ul>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
