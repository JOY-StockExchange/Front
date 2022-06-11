import StockInfoList from '../../stockpage/StockInfoList';
import '../container.css'

const StockInfo = () => {
    return(
        <div className='container container__stockinfo'>
            <div className='container__title'>투자 정보</div>
            <StockInfoList />
        </div>
    )
}

export default StockInfo;