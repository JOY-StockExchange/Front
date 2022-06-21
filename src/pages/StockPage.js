import { useContext, useState } from 'react';
import StockChart from '../components/container/StockPage/StockChart';
import Order from '../components/container/StockPage/Order';
import OrderBook from '../components/container/StockPage/OrderBook';
import StockInfo from '../components/container/StockPage/StockInfo';
import MyRecord from '../components/container/StockPage/MyRecord';
import './page.css';
import { AuthContext } from '../contexts/Store';

const StockPage = () => {
    //AuthContext, user_num를 이용해 소유한 stock인지 확인 후, 소유한 토큰이면 조건부 렌더링
    const [isHearted, setIsHearted] = useState(false);
    const {auth, user_num} = useContext(AuthContext);
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
                {auth ? <Order /> : ''}

                {/*내 주식일때만! */}
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