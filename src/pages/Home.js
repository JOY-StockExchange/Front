import RecentStock from '../components/container/Home/RecentStock';
import StockNews from '../components/container/Home/StockNews';
import StockRanking from '../components/container/Home/StockRanking';
import './page.css'
const Home = () => {
    return(
        <div className='home'>
            <section className='home__section1'>
                <StockRanking />
            </section>
            <section className='home__section2'>
                <RecentStock />
                <StockNews />
            </section>
        </div>
    );
}
export default Home;