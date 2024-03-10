import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl="http://127.0.0.1:8000/api";

function TeacherLogin(){
    const[teacherLoginData, setteacherLoginData]=useState({
        email:'',
        password:''
    });

    const[errorMsg, seterrorMsg] = useState('');
    const handleChange=(event)=>{
        setteacherLoginData({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        });
    }

const submitForm=()=>{
    const teacherFormData = new FormData();
    teacherFormData.append('email',teacherLoginData.email)
    teacherFormData.append('password',teacherLoginData.password)

    try{
        axios.post(baseUrl+'/teacher-login',teacherFormData).then((res)=>{
                if(res.data.bool==true){
                    localStorage.setItem('teacherLoginStatus',true);
                    localStorage.setItem('teacherId',res.data.teacher_id);                  
                    window.location.href='/teacher-dashboard';
                }else{
                    seterrorMsg('Invalid Email or Password!')
                }
            }); 
    }catch(error){
        console.log(error);
    }
}

const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
if(teacherLoginStatus=='true'){
    window.location.href='/teacher-dashboard';
}



useEffect(()=>{
    document.title='Teacher Login'
});

    return(
        <div className='container mt-4 '>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className='card'>
                        <h5 className='card-header text-start'>Teacher Login</h5>
                        <div className='card-body text-start'>
                        
                        {errorMsg && <p className='text-danger'>{errorMsg}</p>}

                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input name='email' onChange={handleChange} value={teacherLoginData.email} type="email" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input name='password' onChange={handleChange} value={teacherLoginData.password}  type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            {/* <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div> */}
                            <button onClick={submitForm} type="submit" className="btn btn-primary">Login</button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherLogin;