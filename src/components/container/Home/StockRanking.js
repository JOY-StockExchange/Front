import StockList from '../../StockList';
import '../container.css'

const StockRanking = () => {
    return(
        <div className='container container__stockranking'>
            <div className='container__title'>실시간 TOP 100</div>
            <div className='container__ul'>
                <StockList />
            </div>
        </div>
    )
}

export default StockRanking;