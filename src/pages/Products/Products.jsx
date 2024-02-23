import ProductSection from "./components/ProductSection";
import useDocumentTitle from '../../functions/useDocumentTitle'

export default function Products() {
    useDocumentTitle('Jiking - Products')
    return (
        <>
            <ProductSection />
        </>
    );
}