import { Link } from 'react-router-dom';

export default function ProductsSection() {
    return (
        <>
            <div className='container mx-auto py-24 sm:py-32'>
                <div className="mx-auto rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hiking Time Calculator</h3>
                        <p className="mt-6 text-base md:text-xl leading-7 text-gray-500">
                            Plan Your Adventure with Precision. Use our intuitive tool to estimate hiking durations accurately based on distance, elevation, and terrain. Get ready to hit the trails with confidence and make the most of your outdoor excursions!
                        </p>

                    </div>

                    <div className="flex justify-center mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="w-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to='/Calculator'
                                    className='inline-block rounded-md border border-transparent bg-lime-500 px-8 py-3 text-lg text-center font-bold text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
                                >
                                    Calculate Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto pb-24 sm:pb-32'>

                <div className="mx-auto rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">

                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Join Us on a Tour</h3>
                        <p className="mt-6 text-base md:text-xl leading-7 text-gray-500">
                            Ready for an adventure? Discover our incredible tours and dive into a world of excitement! Whether you're seeking relaxation or thrill, our carefully crafted experiences promise unforgettable moments. Come explore with us and make memories that will last a lifetime. Start your journey today and have a great time with us!
                        </p>

                    </div>
                    <div className="flex justify-center mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 lg:order-first">
                        <div className="w-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8 ">
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to='/Services'
                                    className='inline-block rounded-md border border-transparent bg-lime-500 px-8 py-3 text-lg text-center font-bold text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
                                >
                                    See Our Services
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className='container mx-auto pb-24 sm:pb-32'>

                <div className="mx-auto rounded-3xl ring-1 ring-gray-200 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">High Quality Gear</h3>
                        <p className="mt-6 text-base md:text-xl leading-7 text-gray-500">
                            Discover a wide range of high-quality hiking products carefully curated to enhance your experience on the trails. From durable backpacks and reliable footwear to advanced navigation tools and eco-friendly gear, we've got everything you need to gear up for your next expedition.
                        </p>

                    </div>

                    <div className="flex justify-center mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="w-full rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <Link
                                    onClick={() => window.scrollTo(0, 0)}
                                    to='/Products'
                                    className='inline-block rounded-md border border-transparent bg-lime-500 px-8 py-3 text-lg text-center font-bold text-white hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-500'
                                >
                                    Check out Our Hiking Essentials
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
