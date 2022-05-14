import StockList from '../../StockList';
import '../container.css'

const RecentStock = () => {
    return(
        <div className='container container__recentstock'>
            <div className='container__title'>최근 본 주식</div>
            <div className='container__ul'>
                <StockList />
            </div>
        </div>
    )
}

export default RecentStock;