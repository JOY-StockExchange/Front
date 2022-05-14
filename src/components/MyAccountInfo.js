import './MyAccountInfo.css';

const MyAccountInfo = () => {
    let historyprice = 2045;
    return (
        <div>
            <div className='myaccountinfo__section'>
                <div className='myaccountinfo__accountid'>계좌번호</div>
                <div className='myaccountinfo__balance'>잔액</div>
                <div className='myaccountinfo__balance-withdraw'>출금가능금액</div>
            </div>
            <div className='myaccountinfo__section myaccountinfo__section__buttons'>
                <button className='myaccountinfo__button'>채우기</button>
                <button className='myaccountinfo__button'>보내기</button>
            </div>
            <div className='myaccountinfo__section'>
                그래프
            </div>
            <div className='myaccountinfo__section'>
                <ul>
                    <li className='myaccountinfo__li'>
                        <span>
                            <span className='myaccountinfo__date' > 날짜</span>
                            <span className='myaccountinfo__time' > 시간</span>
                        </span>
                        <span className='myaccountinfo__detail' > 대한항공 1주</span>
                        <span className='myaccountinfo__type' > 구매</span>
                        <span className='myaccountinfo__price'> 
                        <span className={historyprice > 0 ? 'myaccountinfo__historyprice--positive' : 'myaccountinfo__historyprice--negative'}>{historyprice > 0 ? '+'+historyprice:historyprice}원</span>
                            <span className='myaccountinfo__totalprice'>100,000원</span>
                        </span>
                    </li>
                    <li className='myaccountinfo__li'>
                        <span>
                            <span className='myaccountinfo__date' > 날짜</span>
                            <span className='myaccountinfo__time' > 시간</span>
                        </span>
                        <span className='myaccountinfo__detail' > 대한항공 1주</span>
                        <span className='myaccountinfo__type' >구매</span>
                        <span className='myaccountinfo__price'> 
                            <span className={historyprice > 0 ? 'myaccountinfo__historyprice--positive' : 'myaccountinfo__historyprice--negative'}>{historyprice > 0 ? '+'+historyprice:historyprice}원</span>
                            <span className='myaccountinfo__totalprice'>100,000원</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MyAccountInfo;