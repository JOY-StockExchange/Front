import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../container.css'

const Signup = () => {
    const [inputs, setInputs] = useState({email: '', firstPwd: '', secondPwd: '', tel: ''});
    const [checkPwd, setCheckPwd] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const {firstPwd, secondPwd} = inputs;
    const navigate = useNavigate();

    useEffect(()=>{
        if(firstPwd.length > 0 && secondPwd.length > 0 && firstPwd === secondPwd) setCheckPwd(true);
        else if(checkPwd && firstPwd !== secondPwd) setCheckPwd(false);
    }, [firstPwd, secondPwd, checkPwd])

    const handleInputs = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const handleCheckBox = () => {
        if(isChecked) setIsChecked(false);
        else setIsChecked(true);
    }

    const handleSubmit = () => {
        //조건 체크
        //서버로 회원가입 요청 -> 응답이 오면 홈으로 리다이렉트 
        navigate('/');
    }
    

    return(
        <div className='container container__signup'>
            <div className='container__title signup__title'>회원가입</div>
            <div className='signup__form'>
                <div className='form__element'>
                    <div>이메일*</div>
                    <input name='email' type='email' placeholder='mail@mail.com' onChange={(e) => handleInputs(e)} />
                </div>
                <div className='form__element'>
                    <div>비밀번호*</div>
                    <input name='firstPwd' type='password' placeholder='최소 8글자' onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element'>
                    <div>비밀번호 확인*</div>
                    <input name='secondPwd' type='password' className={checkPwd ? 'form__right': ''} placeholder='최소 8글자' onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element'>
                    <div>전화번호*</div>
                    <input name='tel' type='tel' placeholder='000-0000-0000' onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element form__checkbox'>
                        <input type='checkbox' id='agree-check' onChange={handleCheckBox} />
                        <label htmlFor='agree-check'></label>
                        <span>약관 동의</span>
                </div>
                <div className='form__element'>
                    <button onClick={handleSubmit}>회원가입</button>
                </div>

            </div>
        </div>
    )
}

export default Signup;