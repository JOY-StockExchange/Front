import MyInfoList from '../../MyInfoList';
import '../container.css'

const MyInfo = () => {
    return(
        <div className='container container__myinfo'>
            <div className='container__title myinfo__title'>
                내 정보
                <button className='myinfo__button'>내 정보 수정</button>
            </div>
            <MyInfoList />
        </div>
    )
}

export default MyInfo;