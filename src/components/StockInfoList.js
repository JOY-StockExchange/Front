import './StockInfoList.css';

const StockInfoList = () => {
    return (
        <div className='stockinfo__ul'>
            <div className='stockinfo__li'>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>1일 최고가</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>1일 최저가</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
            </div>
            <div className='stockinfo__li'>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>1일 거래대금</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>1일 거래량</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
            </div>
            <div className='stockinfo__li'>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>시가총액</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>수익배당률</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
            </div>
            <div className='stockinfo__li'>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>PBR</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>ROE</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
            </div>
            <div className='stockinfo__li'>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>PER</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
                <div className='stockinfo__el'>
                    <span className='stockinfo__key'>외국인소진율</span>
                    <span className='stockinfo__value'>34,326원</span>
                </div>
            </div>
        </div>
    )
}
export default StockInfoList;