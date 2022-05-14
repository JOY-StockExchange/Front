import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../container.css'

const MyInfoEdit = () => {
    const [inputs, setInputs] = useState({email: 'silvermn99@gmail.com', firstPwd: '', secondPwd: '', tel: '01000000000'});
    const [checkPwd, setCheckPwd] = useState(false);
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

    const handleSubmit = () => {
        //조건 체크
        //서버로 정보 수정 요청 -> 응답이 오면 홈으로 리다이렉트 
        navigate('/');
    }
    

    return(
        <div className='container container__myinfoedit'>
            <div className='container__title signup__title'>회원 정보 수정</div>
            <div className='signup__form'>
                <div className='form__element'>
                    <div>이메일</div>
                    <input name='email' type='email' value={inputs.email} onChange={(e) => handleInputs(e)} />
                </div>
                <div className='form__element'>
                    <div>비밀번호</div>
                    <input name='firstPwd' type='password' onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element'>
                    <div>비밀번호 확인*</div>
                    <input name='secondPwd' type='password' className={checkPwd ? 'form__right': ''} onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element'>
                    <div>전화번호</div>
                    <input name='tel' type='tel' value={inputs.tel} onChange={(e) => handleInputs(e)}/>
                </div>
                <div className='form__element'>
                    <button onClick={handleSubmit}>정보 수정</button>
                </div>

            </div>
        </div>
    )
}

export default MyInfoEdit;