import PricingSection from './components/PricingSection'
import ProductTable from './components/ProductTable'
import useDocumentTitle from '../../functions/useDocumentTitle';

function Services() {
    useDocumentTitle('Jiking - Services')

    return (
        <>
            <PricingSection />
            <ProductTable />
        </>
    );
}
export default Services;