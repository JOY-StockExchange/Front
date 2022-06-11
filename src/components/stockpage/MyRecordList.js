import './MyRecordList.css';

const MyRecordList = () => {
    let historyprice = 3433;
    return (
        <div className='myrecordlist'>
            <div className='myrecordlist__info'>
                <div className='myrecordlist__ele'>
                    <span className='key'>평균 금액</span>
                    <span className='value'>3456원</span>
                </div>
                <div className='myrecordlist__ele'>
                    <span className='key'>보유 수</span>
                    <span className='value'>3주</span>
                </div>
                <div className='myrecordlist__ele'>
                    <span className='key'>총 금액</span>
                    <span className='value'>10020원</span>
                </div>
            </div>
            <div className='myrecordlist__ul'>
                <div className='myrecordlist__li'>
                    <span>
                        <span className='date'>4.28</span>
                        <span className='time'>00:10</span>
                    </span>
                    <span className='detail'>대한항공 1주</span>
                    <span className='type'>구매</span>
                    <span className='price'> 
                            <span className={historyprice > 0 ? 'price--positive' : 'price--negative'}>{historyprice > 0 ? '+'+historyprice:historyprice}원</span>
                            <span className='totalprice'>100,000원</span>
                    </span>
                </div>
                <div className='myrecordlist__li'>
                    <span>
                        <span className='date'>4.28</span>
                        <span className='time'>00:10</span>
                    </span>
                    <span className='detail'>대한항공 1주</span>
                    <span className='type'>구매</span>
                    <span className='price'> 
                            <span className={historyprice > 0 ? 'price--positive' : 'price--negative'}>{historyprice > 0 ? '+'+historyprice:historyprice}원</span>
                            <span className='totalprice'>100,000원</span>
                    </span>
                </div>
                <div className='myrecordlist__li'>
                    <span>
                        <span className='date'>4.28</span>
                        <span className='time'>00:10</span>
                    </span>
                    <span className='detail'>대한항공 1주</span>
                    <span className='type'>구매</span>
                    <span className='price'> 
                            <span className={historyprice > 0 ? 'price--positive' : 'price--negative'}>{historyprice > 0 ? '+'+historyprice:historyprice}원</span>
                            <span className='totalprice'>100,000원</span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default MyRecordList;