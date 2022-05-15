import './OrderBookInfo.css';

const OrderBookInfo = ()  => {
    return (
        <div>
            <div className='orderbookinfo__ul'>
                <div className='orderbookinfo__li'>
                    <span className='orderbookinfo__limit orderbookinfo__limit--up'>상한가</span>
                    <span className='orderbookinfo__price'>{3530}원</span>
                    <span className='orderbookinfo__buy'></span>
                </div>
                <div className='orderbookinfo__li'>
                    <span className='orderbookinfo__sell'>{392}</span>
                    <span className='orderbookinfo__price'>{3330}원</span>
                    <span className='orderbookinfo__buy'>{2344}</span>
                </div>
                <div className='orderbookinfo__li'>
                    <span className='orderbookinfo__sell'>{392}</span>
                    <span className='orderbookinfo__price'>{3330}원</span>
                    <span className='orderbookinfo__buy'>{234}</span>
                </div>
                <div className='orderbookinfo__li'>
                    <span className='orderbookinfo__sell'></span>
                    <span className='orderbookinfo__price'>{3330}원</span>
                    <span className='orderbookinfo__limit orderbookinfo__limit--down'>하한가</span>
                </div>
            </div>
            <div className='orderbookinfo__totalinfo'>
                <div className='orderbookinfo__totalsell'>
                    <div className='orderbookinfo__totalkey'>판매</div>
                    <div className='orderbookinfo__totalvalue'>{59832}</div>
                </div>
                <div className='orderbookinfo__totalnum'>대기 수량</div>
                <div className='orderbookinfo__totalbuy'>
                    <div className='orderbookinfo__totalkey'>구매</div>
                    <div className='orderbookinfo__totalvalue'>{38272}</div>
                </div>
            </div>
        </div>

    )
}
export default OrderBookInfo;