import MyInfo from '../components/container/MyInfo';
import ExchangeRate from '../components/container/ExchangeRate';
import MyAccount from '../components/container/MyAccount';
import MyStock from '../components/container/MyStock';
import HeartStock from '../components/container/HeartStock';
import './page.css';

const MyPage = () => {
    return(
        <div className='mypage'>
            <header className='mypage__header'>마이페이지</header>
            <wrap className='mypage__wrap'>
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
            </wrap>
        </div>
    );
}
export default MyPage;