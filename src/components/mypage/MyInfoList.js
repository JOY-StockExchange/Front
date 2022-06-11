import './MyInfoList.css';

const MyInfoList = () => {
    return(
        <ul>
            <li className='li__myinfolist'>
                <span className='li__key'>이름</span>
                <span className='li__value'>조은민</span>
            </li>
            <li className='li__myinfolist'>
                <span className='li__key'>이메일</span>
                <span className='li__value'>silvermn@gmail.com</span>
            </li>
            <li className='li__myinfolist'>
                <span className='li__key'>전화번호</span>
                <span className='li__value'>010-0000-0000</span>
            </li>
        </ul>
    )
}
export default MyInfoList;