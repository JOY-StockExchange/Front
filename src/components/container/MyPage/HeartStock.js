import StockList from '../../StockList';
import '../container.css'
import { stocks } from '../../../example';

const HeartStock = () => {
    return(
        <div className='container container__heartstock'>
            <div className='container__title'>관심 종목</div>
            <div className='container__ul'>
                <StockList stocks={stocks}/>
            </div>
        </div>
    )
}

export default HeartStock;