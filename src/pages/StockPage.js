import StockChart from '../components/container/StockPage/StockChart';
import Order from '../components/container/StockPage/Order';
import OrderBook from '../components/container/StockPage/OrderBook';
import StockInfo from '../components/container/StockPage/StockInfo';
import './page.css';

const StockPage = () => {
    return(
        <div className='stockpage'>
        <header className='stockpage__header'>삼성전자</header>
        <div className='stockpage__wrap'>
            <section className='stockpage__section1'>
                <StockChart />
                <Order />
            </section>
            <section className='stockpage__section2'>
                <OrderBook />
                <StockInfo />
            </section>
        </div>
    </div>
    );
}
export default StockPage;