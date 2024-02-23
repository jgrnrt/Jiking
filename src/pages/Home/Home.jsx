import HeaderSection from './components/HeaderSection';
import ProductsSection from './components/ProductsSection'
import useDocumentTitle from '../../functions/useDocumentTitle';
import Gallery from './components/Gallery';

function Home() {
    useDocumentTitle('Jiking')

    return (
        <>
            <HeaderSection />
            <ProductsSection />
            <Gallery />
        </>
    );
}

export default Home;