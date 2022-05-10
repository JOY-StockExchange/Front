import { Link } from 'react-router-dom';
import '../container.css'

const Signin = () => {
    return(
        <div className='container container__signin'>
            <div className='signin__title'>로그인</div>
            <div className='signin__form'>
                <div className='form__element'>
                    <div>이메일*</div>
                    <input type='email' placeholder='mail@mail.com' />
                </div>
                <div className='form__element'>
                    <div>비밀번호*</div>
                    <input type='password' placeholder='최소 8글자'/>
                </div>
                <div className='form__element form__checkbox'>
                        <input type='checkbox' id='login-maintain' />
                        <label htmlFor='login-maintain'></label>
                        <span>로그인 유지</span>
                </div>
                <div className='form__element'>
                    <button>로그인</button>
                </div>
                <div className='form__element'>
                    <span>계정이 없으신가요?</span>
                    <Link to='../signup'> 회원가입</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;