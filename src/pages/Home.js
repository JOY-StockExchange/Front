import RecentStock from '../components/container/RecentStock';
import StockNews from '../components/container/StockNews';
import StockRanking from '../components/container/StockRanking';
import './Home.css'
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