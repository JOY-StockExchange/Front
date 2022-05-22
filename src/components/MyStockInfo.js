import { useState } from 'react';
import StockBenefit from './modal/StockBenefit';
import OrderHistory from './modal/OrderHistory';
import './MyStockInfo.css';

const MyStockInfo = () => {
    const [stockBenefitOpen, setStockBenefitOpen] = useState(false);
    const [orderHistoryOpen, setOrderHistoryOpen] = useState(false);
    let totalper = -2.45;

    const stockBenefitHandler = () => {
        if(stockBenefitOpen) setStockBenefitOpen(false);
        else setStockBenefitOpen(true);
    }

    const orderHistoryHandler = () => {
        if(orderHistoryOpen) setOrderHistoryOpen(false);
        else setOrderHistoryOpen(true);
    }
    return (
        <div className='section__mystockinfo'>
            <div className='section__mystocktotal'>
                <div className='mystockinfo__update'>자동업데이트</div>
                <div className='mystockinfo__totalprice'>100,000원</div>
                <div>
                    <span className='mystockinfo__totalper'>내 수익률</span>
                    <span className={totalper > 0 ?'mystockinfo__totalper--num mystockinfo__totalper--positive':'mystockinfo__totalper--num mystockinfo__totalper--negative'}>{totalper > 0 ? '+'+totalper : totalper}%</span>
                </div>
            </div>
            <div className='section__buttons'>
                <button className='button__mystockinfo' onClick={stockBenefitHandler}>판매 수익</button>
                <button className='button__mystockinfo' onClick={orderHistoryHandler}>주문 내역</button>
            </div>
            {/*판매수익인지, 주문내역인지에 따라 조건부 렌더링(혹은 모달 두개 따로 만들기)*/}
            {stockBenefitOpen ? <StockBenefit stockBenefitHandler={stockBenefitHandler}/> : ''}
            {orderHistoryOpen ? <OrderHistory orderHistoryHandler={orderHistoryHandler}/> : ''}
        </div>
    )
}
export default MyStockInfo;