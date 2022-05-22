import './modal.css';

const AccountIn = ({accountInHandler}) => {
    return (
        <div className='container__modal' onClick={accountInHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={accountInHandler}>x</button>
                <div className='container__title'>채우기</div>
            </div>
        </div>
    )
}
export default AccountIn;