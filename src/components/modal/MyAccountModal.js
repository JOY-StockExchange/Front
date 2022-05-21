import './modal.css';

const MyAccountModal = ({modalHandler}) => {
    return (
        <div className='container__modal' onClick={modalHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={modalHandler}>x</button>
                <div className='container__title'>채우기 OR 보내기</div>
            </div>
        </div>
    )
}
export default MyAccountModal;