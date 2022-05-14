import './MyAccountInfo.css';

const MyAccountInfo = () => {
    return (
        <div>
            <div>
                <div>계좌번호</div>
                <div>잔액</div>
                <div>출금가능금액</div>
            </div>
            <div>
                <button>채우기</button>
                <button>보내기</button>
            </div>
            <div>
                그래프
            </div>
            <div>
                <ul>
                    <li>
                        <span> 날짜</span>
                        <span> 시간</span>
                        <span> 대한항공 1주</span>
                        <span> 구매</span>
                        <span> 
                            <span>-2046원</span>
                            <span>100,000원</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MyAccountInfo;