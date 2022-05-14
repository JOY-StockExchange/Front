import { Link } from 'react-router-dom';
import './Stock.css';

const Stock = () => {
    return (
        <div className='container__stock'>
            <Link to='/stockpage/samsungbio'>
                <img className='element__stock img__stock' alt='samsung' src='samsung.png' />
                <span className='element__stock stock__name'>삼성전자</span>
                <span className='element__stock stock__price'>73,339원</span>
                <span className='element__stock stock__per'>+2.75 %</span>
            </Link>
        </div>
    )
}
export default Stock;