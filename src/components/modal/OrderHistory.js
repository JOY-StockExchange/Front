import './modal.css';

const OrderHistory = ({orderHistoryHandler}) => {
    return (
        <div className='container__modal' onClick={orderHistoryHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={orderHistoryHandler}>x</button>
                <div className='container__title'>주문내역</div>
            </div>
        </div>
    )
}
export default OrderHistory;