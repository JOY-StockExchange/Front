import { useState } from 'react';
import './Buy.css';

const Buy = () => {
    //시장가 받아오기
    const [price, setPrice] = useState(34354);
    const [selectedValue, setSelectedValue] = useState('marketorder');
    const [num, setNum] = useState(0);

    const inputPriceHandler = (e) => {
        setPrice(e.target.value);
    }

    const selectHandler = (e) => {
        setSelectedValue(e.target.value);
    }

    const inputNumHandler = (e) => {
        setNum(e.target.value)
    }

    return (
        <div>
            <div className='section__buy'>
                <div className='section__setorder'>
                    <div className='section__setprice'>
                        <select onChange={(e) => selectHandler(e)}>
                            <option value='marketorder'>시장가</option>
                            <option value='pendingorder'>지정가</option>
                        </select>
                        <div className='orderprice'>
                            {/*숫자만 입력되도록 처리하기 */}
                            <input 
                            value={price} 
                            disabled={selectedValue === 'marketorder' ? 'diabled' : '' } 
                            onChange={(e) => inputPriceHandler(e)}
                            />
                            <span>원</span>
                        </div>
                    </div>
                    <input type='number' className='inputnum' placeholder='몇 주 구매할까요?' onChange={(e) => inputNumHandler(e)}/>
                </div>
                <div className='section__checkorder'>
                    <div className='section__buynum'>
                        <span className='key'>주문 수량</span>
                        <span className='value'>{num}주 </span>
                    </div>
                    <div className='section__buyprice'>
                        <span className='key'>주문 가격</span>
                        <span className='value'>{num * price}원</span>
                    </div>
                </div>
            </div>
            <div className='section__buy--button'>
                <button className='button__buy'>주문하기</button>
            </div>
        </div>
    )
}
export default Buy;