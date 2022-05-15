import Chart from './Chart';
import './StockChartInfo.css';

const StockChartInfo = () => {
    let per = 3.45;
    return (
        <div className='stockchartinfo'>
            <div className='stockchartinfo__info'>
                <div className='stockchartinfo__update'>실시간 업데이트</div>
                <div>
                    <span className='stockchartinfo__price'>{90435}원</span>
                    <span className={per > 0 ? 'stockchartinfo__per stockchartinfo__per--positive' : 'stockchartinfo__per stockchartinfo__per--negative'}>{3.46}%</span>
                </div>
                <div>
                    <select className='stockchartinfo__select'>
                        <option value='day'>오늘</option>
                        <option value='week'>주</option>
                        <option value='month'>월</option>
                    </select>
                </div>
            </div>
            <Chart />
        </div>
    )
}

export default StockChartInfo;