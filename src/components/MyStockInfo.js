import './MyStockInfo.css';

const MyStockInfo = () => {
    let totalper = -2.45;
    return (
        <div className='section__mystockinfo'>
            <div className='section__mystocktotal'>
                <div className='mystockinfo__update'>자동업데이트</div>
                <div className='mystockinfo__totalprice'>100,000원</div>
                <div>
                    <span className='mystockinfo__totalper'>내 수익률</span>
                    <span className={totalper > 0 ?'mystockinfo__totalper--num mystockinfo__totalper--positive':'mystockinfo__totalper--num mystockinfo__totalper--negative'}>{totalper > 0 ? '+'+totalper : totalper}%</span>
                </div>
            </div>
            <div className='section__buttons'>
                <button className='button__mystockinfo'>판매 수익</button>
                <button className='button__mystockinfo'>주문 내역</button>
            </div>
        </div>
    )
}
export default MyStockInfo;