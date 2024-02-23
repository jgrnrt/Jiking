import { CheckIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom';

const includedFeatures = [
    '3-Day Adventure',
    'Mountains',
    'Enormous Landscapes',
    'Up to 4 Companions',
]

export default function PricingSection() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto container">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Experience Premium Tours</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Discover the great outdoors with our diverse range of tours, designed to cater to every adventurer's dream. Whether you're seeking solitude or the spirit of community, our tours offer the perfect escape into nature's wonders. Join us on a journey of discovery and experience the adventure of a lifetime.
                    </p>
                </div>
                <div className="mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Premium Solo Tour</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Experience unparalleled personal discovery with our Exclusive Solo Adventure — a tailor-made journey crafted solely for you. Secure your solo expedition now and immerse yourself in the tranquility and excitement of nature, independently or with up to four companions.                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-lime-500">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon className="h-6 w-5 flex-none text-lime-500" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="w-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">$489</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                </p>
                                <Link
                                    to='/Contact'
                                    className='mt-10 inline-block rounded-md border border-transparent bg-lime-500 px-8 py-3 text-center font-medium text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
