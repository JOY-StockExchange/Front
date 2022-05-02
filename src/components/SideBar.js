const SideBar = () => {
    //Sidebar에서는 Link를 해주어야 한다.
    return(
        <div className="sidebar">
            <div className="sidebar-title">조이증권</div>
            <div className="separator"></div>
            <ul className="page-ul">
                {/*page router에 따라 active, inactive 설정하기*/}
                <li className="page-li">
                    <i class="fa-solid fa-house active"></i>
                    <span className="active">홈</span>
                    <div className="page-li-bar-active"></div>
                </li>
                <li className="page-li">
                    <i class="fa-solid fa-user inactive"></i>
                    <span className="inactive">마이페이지</span>
                    <div className="page-li-bar-inactive"></div>
                </li>
            </ul>
        </div>
    );
}

export default SideBar;