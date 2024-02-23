export default function ProductTable() {
    const services = [
        { id: 1, name: 'Mountain Explorer', description: 'Explore the highest peaks', price: '$99' },
        { id: 2, name: 'Forest Trail Walk', description: 'Guided walks through ancient forests', price: '$59' },
        { id: 3, name: 'Sunset Hike', description: 'Evening hikes to watch the sunset', price: '$79' },
        { id: 4, name: 'Nature Photography Tour', description: 'Capture the wilderness with a camera', price: '$129' },
        { id: 5, name: 'Bird Watching Hike', description: 'Discover local bird species', price: '$69' },
        { id: 6, name: 'Eco-Friendly Camping', description: 'Sustainable camping experiences', price: '$199' }
    ];
    return (
        <>
            <div className="pb-24 sm:pb-32">
                <div className="mx-auto container">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Group Tours</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Join the camaraderie of the outdoors with our Group Tour Service, where memories and friendships are waiting to be made. Secure your spot now and embark on an unforgettable group adventure that will bring stories for years to come.
                        </p>
                    </div>

                    <table className="mt-16 sm:mt-20 w-full text-sm text-left rounded-3xl ring-1 ring-gray-200 overflow-hidden">
                        <thead className="bg-gray-50 rounded-t-3xl">
                            <tr className="border-b-2">
                                <th scope="col" className="py-3 px-6 rounded-tl-3xl">
                                    Available Tours
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Description
                                </th>
                                <th scope="col" className="py-3 px-6 rounded-tr-3xl">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {services.map((service, index) => (
                                <tr key={service.id} className={`${index === services.length - 1 ? '' : 'border-b'} odd:bg-white even:bg-gray-50 hover:bg-lime-600 hover:text-white`}>
                                    <td className={`py-4 px-6 ${index === services.length - 1 ? 'rounded-bl-3xl' : ''}`}>
                                        {service.name}
                                    </td>
                                    <td className="py-4 px-6">
                                        {service.description}
                                    </td>
                                    <td className={`py-4 px-6 ${index === services.length - 1 ? 'rounded-br-3xl' : ''}`}>
                                        {service.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}