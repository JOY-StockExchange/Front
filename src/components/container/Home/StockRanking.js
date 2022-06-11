import StockList from '../../StockList';
import '../container.css'
//example에서 데이터를 불러오는 것이 아니라, api에서 불러올것!
import {stocks} from '../../../example';


const StockRanking = () => {
    return(
        <div className='container container__stockranking'>
            <div className='container__title'>실시간 TOP 100</div>
            <div className='container__ul'>
                <StockList stocks={stocks}/>
            </div>
        </div>
    )
}

export default StockRanking;