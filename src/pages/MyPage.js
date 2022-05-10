import MyInfo from '../components/container/MyPage/MyInfo';
import ExchangeRate from '../components/container/MyPage/ExchangeRate';
import MyAccount from '../components/container/MyPage/MyAccount';
import MyStock from '../components/container/MyPage/MyStock';
import HeartStock from '../components/container/MyPage/HeartStock';
import './page.css';

const MyPage = () => {
    return(
        <div className='mypage'>
            <header className='mypage__header'>마이페이지</header>
            <div className='mypage__wrap'>
                <section className='mypage__section1'>
                    <MyInfo />
                    <ExchangeRate />
                </section>
                <section className='mypage__section2'>
                    <MyAccount />
                </section>
                <section className='mypage__section3'>
                    <MyStock />
                    <HeartStock />
                </section>
            </div>
        </div>
    );
}
export default MyPage;