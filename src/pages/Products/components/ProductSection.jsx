import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: 'Red Jacket',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Red Jacket.",
        price: '$69',
        brand: 'Jiking',
    },
    {
        id: 2,
        name: 'Brown Leather Boots',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Brown boots.",
        price: '$119',
        brand: 'Jiking',
    },
    {
        id: 3,
        name: 'Black Leather Gloves',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1519766400364-8824dc3c4e26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Black leather gloves on wood.",
        price: '$55',
        brand: 'Rapha',
    },
    {
        id: 4,
        name: 'Blue Backpack',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1575844264771-892081089af5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Backpack.",
        price: '$69',
        brand: 'Patagonia',
    },
    {
        id: 5,
        name: 'Black Flashlight',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1561917181-7441b9a74ce7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Flashlight.",
        price: '$419',
        brand: 'Gucci',
    },
    {
        id: 6,
        name: 'Tent',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1565578151233-45758846ae9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Tent.",
        price: '$35',
        brand: 'Louis Vuitton',
    },
    {
        id: 7,
        name: 'Sunglasses',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Sunglasses on white background.",
        price: '$469',
        brand: 'Burberry',
    },
    {
        id: 8,
        name: 'Headlamp',
        to: '/Contact',
        imageSrc: 'https://images.unsplash.com/photo-1630275383125-2ecfa5f431d5?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        imageAlt: "Headlamp worn in the dark.",
        price: '$49',
        brand: 'Balenciaga',
    },
]

export default function ProductSection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="container mx-auto">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hiking Essentials</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Elevate your hiking adventures with our premium gear,
                        designed to bring comfort, durability, and style to every step of your journey.
                    </p>
                </div>

                <div className="mx-auto pt-16 sm:pt-24 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (

                        <div key={product.id} className="group relative">
                            <Link
                                className=""
                                to={product.to}
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full "
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{product.brand}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                </div>
                            </Link>
                        </div>

                    ))}
                </div>

            </div>
        </div >
    )
}
