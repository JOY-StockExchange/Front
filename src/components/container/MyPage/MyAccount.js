import MyAccountInfo from '../../MyAccountInfo';
import '../container.css'

const MyAccount = () => {
    return(
        <div className='container container__myaccount'>
            <div className='container__title myaccount__title'>
                계좌 정보
                <button className='myaccount__button'>내 정보 수정</button>
            </div>
            <MyAccountInfo />
        </div>
    )
}

export default MyAccount;