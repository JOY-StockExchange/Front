import './modal.css';

const MyAccountEdit = ({modalHandler}) => {
    return (
        <div className='container__modal' onClick={modalHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={modalHandler}>x</button>
                <div className='container__title'>계좌 정보 수정</div>
            </div>
        </div>
    )
}
export default MyAccountEdit;