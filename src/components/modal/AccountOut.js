import './modal.css';

const AccountOut = ({accountOutHandler}) => {
    return (
        <div className='container__modal' onClick={accountOutHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={accountOutHandler}>x</button>
                <div className='container__title'>보내기</div>
            </div>
        </div>
    )
}
export default AccountOut;