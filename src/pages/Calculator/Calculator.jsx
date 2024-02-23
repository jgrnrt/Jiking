import CalcComponent from './components/CalcComponent';
import useDocumentTitle from '../../functions/useDocumentTitle';

export default function Calculator() {
    useDocumentTitle('Jiking - Calculator');


    return (
        <>
            <CalcComponent />
        </>
    );
}