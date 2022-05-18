import './Modal.css';

const Modal = ({modalHandler})  => {
    return (
        <div className='container__modal' onClick={modalHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={modalHandler}>x</button>
            </div>
        </div>
    )
}
export default Modal;