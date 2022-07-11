import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../../apis/api/user';
import MyInfoList from '../../mypage/MyInfoList';
import '../container.css'

const MyInfo = () => {
    useEffect(() => {
        getUserInfo();
    }, [])
    const getUserInfo = async () => {
        const data = await getUser()
        console.log(data)
    }
    return(
        <div className='container container__myinfo'>
            <div className='container__title myinfo__title'>
                내 정보
                <Link to='../myinfoedit'>
                    <button className='myinfo__button'>내 정보 수정</button>
                </Link>
            </div>
            <MyInfoList />
        </div>
    )
}

export default MyInfo;