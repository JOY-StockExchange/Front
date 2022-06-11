import StockList from '../../StockList';
import '../container.css'
import { stocks } from '../../../example';

const RecentStock = () => {
    return(
        <div className='container container__recentstock'>
            <div className='container__title'>최근 본 주식</div>
            <div className='container__ul'>
                <StockList stocks={stocks} />
            </div>
        </div>
    )
}

export default RecentStock;