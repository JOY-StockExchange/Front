import { Link } from 'react-router-dom';
import '../container.css'

const RecentStock = () => {
    return(
        <div className='container container__recentstock'>
            <div className='container__title'>최근 본 주식</div>
            <ul className='container__ul'>
                <li>
                    {/*stockpage/:stockId*/}
                    <Link to='stockpage/1'>삼성전자</Link>
                </li>
            </ul>
        </div>
    )
}

export default RecentStock;