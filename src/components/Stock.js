import { Link } from 'react-router-dom';
import './Stock.css';

const Stock = () => {
    let per = - 2.75;
    return (
        <div className='container__stock'>
            <Link to='/stockpage/samsungbio'>
                <img className='element__stock img__stock' alt='samsung' src='samsung.png' />
                <span className='element__stock stock__name'>삼성전자</span>
                <span className='element__stock stock__price'>73,339원</span>
                <span className={per > 0 ?'element__stock stock__per stock__per--positive':'element__stock stock__per stock__per--negative'}>{per > 0 ? '+'+per : per}%</span>
            </Link>
        </div>
    )
}
export default Stock;