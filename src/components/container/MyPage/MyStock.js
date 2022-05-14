import StockList from '../../StockList';
import '../container.css'

const MyStock = () => {
    return(
        <div className='container container__mystock'>
            <div className='container__title'>내 주식</div>
            <div className='container__ul'>
                <StockList />
            </div>
        </div>
    )
}

export default MyStock;