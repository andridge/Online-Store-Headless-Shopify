import { storeFront } from '../utils/index';

export default function ProductList({ products }) {
  const staticProducts = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ];

  console.log({ products });

  return (
    <div className="bg-white bg-opacity-0">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {staticProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-20"
                />
              </div>
              <h3 className="mt-4 text-sm text-indigo-600">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-white">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
    try {
      const response = await storeFront(productQuery);
      console.log('API Response:', response);
  
      return {
        props: {
          products: response.data.products.edges.map((edge) => edge.node),
        },
      };
    } catch (error) {
      console.error('API Error:', error);
      return {
        props: {
          products: [],
        },
      };
    }
  }
  
const gql = String.raw;
const productQuery = gql`query Products{
    products (first: 4){
      edges{
        node{
          title
          handle
          priceRange {
            minVariantPrice{
              amount
            }
          }
          images(first:1){
            edges{
              node{
                transformedSrc
                altText
              }
            }
          }
        }
      }
      
    }
  }`
