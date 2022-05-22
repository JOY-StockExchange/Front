import { useState } from 'react';
import StockChart from '../components/container/StockPage/StockChart';
import Order from '../components/container/StockPage/Order';
import OrderBook from '../components/container/StockPage/OrderBook';
import StockInfo from '../components/container/StockPage/StockInfo';
import MyRecord from '../components/container/StockPage/MyRecord';
import './page.css';

const StockPage = () => {
    const [isHearted, setIsHearted] = useState(false);

    const heartHandler = () => {
        if(isHearted) setIsHearted(false);
        else setIsHearted(true);
    }

    return(
        <div className='stockpage'>
        <header className='stockpage__header'>
            <span>삼성전자</span>
            {isHearted ? <i className="fa-solid fa-heart" onClick={heartHandler}></i> : <i className="fa-regular fa-heart" onClick={heartHandler}></i> }
        </header>
        <div className='stockpage__wrap'>
            <section className='stockpage__section1'>
                <StockChart />
                <Order />
                {/*내 주식일때만 */}
                <MyRecord />
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