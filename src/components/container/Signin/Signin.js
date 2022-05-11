import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../container.css'

const Signin = () => {
    const [inputs, setInputs] = useState({email:'', password:''});
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleCheckBox = () => {
        if(isChecked) setIsChecked(false);
        else setIsChecked(true);
    }

    const handleSubmit = () => {
        //조건 체크
        //서버로 로그인 요청 -> 응답이 오면 상태변경하고 홈으로 리다이렉트 
        navigate('/');
    }
    return(
        <div className='container container__signin'>
            <div className='signin__title'>로그인</div>
            <div className='signin__form'>
                <div className='form__element'>
                    <div>이메일</div>
                    <input name='email' type='email' placeholder='mail@mail.com' onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element'>
                    <div>비밀번호</div>
                    <input name='password' type='password' placeholder='최소 8글자' onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element form__checkbox'>
                        <input type='checkbox' id='login-maintain' onChange={handleCheckBox}/>
                        <label htmlFor='login-maintain'></label>
                        <span>로그인 유지</span>
                </div>
                <div className='form__element'>
                    <button onClick={handleSubmit}>로그인</button>
                </div>
                <div className='form__element'>
                    <span>계정이 없으신가요?</span>
                    <Link to='../signup' className='link'> 회원가입</Link>
                </div>
            </div>
        </div>
    )
}

export default Signin;