import MyStockInfo from '../../mypage/MyStockInfo';
import StockList from '../../StockList';
import '../container.css'
import { stocks } from '../../../example';

const MyStock = () => {
    return(
        <div className='container container__mystock'>
            <div className='container__title'>내 주식</div>
            <div>
                <MyStockInfo />
            </div>
            <div className='container__ul'>
                <StockList stocks={stocks} />
            </div>
        </div>
    )
}

export default MyStock;