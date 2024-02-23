import JikingLogo from '/JikingLogo.svg';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Calculator', to: '/Calculator' },
    { name: 'Services', to: '/Services' },
    { name: 'Products', to: '/Products' },
    { name: 'Contact', to: '/Contact' },
    { name: 'Imprint', to: '/Imprint' },
    { name: 'Not Found', to: '/whereAmI?' },
]

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="p-4 bg-lime-900 md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center">

                <div className="flex justify-center">
                    <Link className='flex items-center' to="/">
                        <img
                            className='w-auto h-8'
                            src={JikingLogo}
                            alt="Jiking"
                            onClick={() => window.scrollTo(0, 0)}
                        />
                        <h1 className='ms-2 text-2xl font-semibold text-white'>Jiking</h1>
                    </Link>
                </div>

                <p className="my-6 text-gray-200">Your ultimate destination for all things hiking.</p>

                <div className="flex flex-wrap justify-center items-center mb-6 text-white">
                    {navigation.map((item, index) => (
                        <Link
                            key={index}
                            to={item.to}
                            className='mr-4 hover:underline md:mr-6'
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <span className="text-sm  sm:text-center text-gray-400">© {currentYear} Jiking. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;