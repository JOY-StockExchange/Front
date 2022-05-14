import Stock from './Stock';
import './StockList.css';

const StockList = () => {
    return (
        <ul>
            <li>
                <Stock />
            </li>
            <li>
                <Stock />
            </li>
            <li>
                <Stock />
            </li>
        </ul>
    )
}
export default StockList;