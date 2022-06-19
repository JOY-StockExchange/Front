import { Link } from 'react-router-dom';
import './Stock.css';

const Stock = (props) => {
    const src = `/stockpage/${props.id}`
    return (
        <div>
            <Link to={src} className='container__stock'>{/*연결된 뒤에 component에서 useEffect 할것!*/}
                <img className='element__stock img__stock' alt='samsung' src={props.img} />
                <span className='element__stock stock__name'>{props.name}</span>
                <span className='element__stock stock__price'>{props.price}원</span>
                <span className={props.rate > 0 ?'element__stock stock__per stock__per--positive':'element__stock stock__per stock__per--negative'}>{props.rate > 0 ? '+'+props.rate : props.rate}%</span>
            </Link>
        </div>
    )
}
export default Stock;