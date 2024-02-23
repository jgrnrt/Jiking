const stats = [
    { name: 'Completed Tours', value: '5000+' },
    { name: 'Full-Time Guides', value: '20+' },
    { name: 'Worldwide Locations', value: '8' },
    { name: 'Hours', value: '24/7' },
]

export default function HeaderSection() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-36 sm:py-60 2xl:py-80">
            <img
                src="https://images.unsplash.com/photo-1545917992-dea2d782ef46?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-middle md:object-center brightness-50"
            />

            <div className="mx-auto container">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Hike with us</h2>
                    <p className="mt-6 text-2xl leading-8 text-lime-400">
                        Welcome to Jiking – your ultimate destination for all things hiking! Whether you're a seasoned hiker or just starting out, Jiking is here to elevate your outdoor adventures to new heights.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
