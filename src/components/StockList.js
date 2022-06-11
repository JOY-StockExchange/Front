import { useState } from 'react';
import Stock from './Stock';
import './StockList.css';

const StockList = ({stocks}) => {
    const [show, setShow] = useState(stocks.slice(0,5));
    const handleButton = () => {
        setShow(show.concat(stocks.slice(show.length, show.length + 5)))
    }
    return (
        <div className='container__stockList'>
            <ul>
                {show.map((el, idx) => {
            return <li key={idx}>
                <Stock id={el.id} name={el.name} price={el.price} img={el.img} rate={el.rate} />
            </li>
        })}
            </ul>
            <button className='button__stockList' onClick={handleButton}>더보기</button>
        </div>
    )
}
export default StockList;