import { useState } from 'react';
import MyAccountInfo from '../../MyAccountInfo';
import '../container.css'
import MyAccountEdit from '../../modal/MyAccountEdit';

const MyAccount = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalHandler = () => {
        if(modalOpen) setModalOpen(false);
        else setModalOpen(true);
    }
    return(
        <div className='container container__myaccount'>
            <div className='container__title myaccount__title'>
                계좌 정보
                <button className='myaccount__button' onClick={modalHandler}>계좌 정보 수정</button>
                {modalOpen && <MyAccountEdit modalHandler={modalHandler} />}
            </div>
            <MyAccountInfo />
        </div>
    )
}

export default MyAccount;