import React,{useState,useEffect,useContext} from 'react'
import AuthContext from '../../context/auth/authContext'
import AlertContext from '../../context/alert/alertContext'

function Login(props) {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    
    const {setAlert} = alertContext;
    const {login,error,clearErrors,isAuthenticated} = authContext;
     
    
    useEffect(()=>{
        if(isAuthenticated){
            props.history.push('/')
        }
        if(error === 'Invalid Credentials'){
            setAlert(error,'danger');
            clearErrors();

        }
        //eslint-disable-next-line
    },[error,isAuthenticated,props.history])
    
    const [user,setUser]=useState({
     
        email:'',
        password:'',
      
    })

    const {email,password,}=user;

    const onChange= e =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) =>{
      e.preventDefault();
      if(email === '' || password === ''){
         setAlert('Please type in email and password!','danger')
      }
      else{
          login({
              email,
              password
          });
      }
    }

    return (
        <div className='form-container'>
            <h1>Account <span className="text-primary">Login</span></h1>
            <form onSubmit={onSubmit}>
               
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                    onChange={onChange}
                    type="email"
                    name='email'
                    value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                    onChange={onChange}
                    type="password"
                    name='password'
                    value={password}/>
                </div>
              
                <input type="submit" value='Login'className='btn btn-primary btn-block'/>
            </form>
        </div>
    )
}

export default Login
