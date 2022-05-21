import './modal.css';

const MyStockModal = ({modalHandler}) => {
    return (
        <div className='container__modal' onClick={modalHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={modalHandler}>x</button>
                <div className='container__title'>판매수익 or 주문내역</div>
            </div>
        </div>
    )
}
export default MyStockModal;