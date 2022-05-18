import { useState } from 'react';
import Buy from '../../Buy';
import Sell from '../../Sell';
import '../container.css'

const Order = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const tabArr = [
        {name: '매수', content: <Buy />},
        {name: '매도', content: <Sell />}
    ]

    const selectTabHandler = (index) => {
        setCurrentTab(index);
    }

    return(
        <div className='container__order'>
            <div className='order__title'>
                {tabArr.map((ele, index) => {
                    return (
                        <li key={index} className={currentTab === index ? 'order__tab order__tab--focus' : 'order__tab'} onClick={() => selectTabHandler(index)}>
                            {ele.name}
                        </li>
                    )
                })}
            </div>
            <div>
                {tabArr[currentTab].content}
            </div>
        </div>
    )
}

export default Order;