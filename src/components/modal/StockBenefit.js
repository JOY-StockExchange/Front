import './modal.css';

const StockBenefit = ({stockBenefitHandler}) => {
    return (
        <div className='container__modal' onClick={stockBenefitHandler}>
            <div className='modal'>
                <button className='modal__button' onClick={stockBenefitHandler}>x</button>
                <div className='container__title'>판매수익</div>
            </div>
        </div>
    )
}
export default StockBenefit;