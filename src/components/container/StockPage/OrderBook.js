import OrderBookInfo from '../../OrderBookInfo';
import '../container.css'

const OrderBook = () => {
    return(
        <div className='container container__orderbook'>
            <div className='container__title'>호가</div>
            <OrderBookInfo />
        </div>
    )
}

export default OrderBook;