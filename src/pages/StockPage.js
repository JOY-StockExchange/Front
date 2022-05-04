import StockChart from '../components/container/StockChart';
import Order from '../components/container/Order';
import OrderBook from '../components/container/OrderBook';
import StockInfo from '../components/container/StockInfo';
import './page.css';

const StockPage = () => {
    return(
        <div className='stockpage'>
        <header className='stockpage__header'>삼성전자</header>
        <wrap className='stockpage__wrap'>
            <section className='stockpage__section1'>
                <StockChart />
                <Order />
            </section>
            <section className='stockpage__section2'>
                <OrderBook />
                <StockInfo />
            </section>
        </wrap>
    </div>
    );
}
export default StockPage;