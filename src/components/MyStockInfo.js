import { useState } from 'react';
import MyStockModal from './modal/MyStockModal';
import './MyStockInfo.css';

const MyStockInfo = () => {
    const [modalOpen, setModalOpen] = useState(false);
    let totalper = -2.45;

    const modalHandler = () => {
        if(modalOpen) setModalOpen(false);
        else setModalOpen(true);
    }
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
                <button className='button__mystockinfo' onClick={modalHandler}>판매 수익</button>
                <button className='button__mystockinfo' onClick={modalHandler}>주문 내역</button>
            </div>
            {/*판매수익인지, 주문내역인지에 따라 조건부 렌더링(혹은 모달 두개 따로 만들기)*/}
            {modalOpen ? <MyStockModal modalHandler={modalHandler}/> : ''}
        </div>
    )
}
export default MyStockInfo;