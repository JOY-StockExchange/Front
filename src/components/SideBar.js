import { NavLink } from 'react-router-dom';

const SideBar = () => {
    //Sidebar에서는 Link를 해주어야 한다.
    return(
        <nav>
            <div className="nav__title">조이증권</div>
            <div className="separator"></div>
            <ul className="nav__ul">
                {/*page router에 따라 active, inactive 설정하기*/}
                <NavLink to = "/" className={({isActive}) => (isActive ? "active": "inactive")}>
                    <li className="nav__li">
                        <i className="fa-solid fa-house"></i>
                        <span>홈</span>
                        <div className="nav__statebar nav__statebar--active"></div>
                    </li>
                </NavLink>
                <NavLink to = "mypage" className={({isActive}) => (isActive ? "active": "inactive")}>
                    <li className="nav__li">
                        <i className="fa-solid fa-user"></i>
                        <span>마이페이지</span>
                        <div className="nav__statebar nav__statebar--active"></div>
                    </li>
                </NavLink>
                <NavLink to = "signin" className={({isActive}) => (isActive ? "active": "inactive")}>
                    <li className="nav__li">
                        <i className="fa-solid fa-user "></i>
                        <span>로그인</span>
                        <div className="nav__statebar nav__statebar--active"></div>
                    </li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default SideBar;