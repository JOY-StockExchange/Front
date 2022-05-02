const SideBar = () => {
    //Sidebar에서는 Link를 해주어야 한다.
    return(
        <nav>
            <div className="nav__title">조이증권</div>
            <div className="separator"></div>
            <ul className="nav__ul">
                {/*page router에 따라 active, inactive 설정하기*/}
                <li className="nav__li">
                    <i class="fa-solid fa-house active"></i>
                    <span className="active">홈</span>
                    <div className="nav__statebar nav__statebar--active"></div>
                </li>
                <li className="nav__li">
                    <i class="fa-solid fa-user inactive"></i>
                    <span className="inactive">마이페이지</span>
                    <div className="nav__statebar nav__statebar--inactive"></div>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;