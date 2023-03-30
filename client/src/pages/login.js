import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'


const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData

    const [typePass, setTypePass] = useState(false)

    const { auth } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        if(auth.token) history.push("/")
    }, [auth.token, history])

    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(login(userData))
    }

    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit} className="myBgdark2 text-light">
                <h3 className="text-uppercase text-center mb-4"> 
                <img className='bg-transparent' src="https://media.graphassets.com/xVHfJFDfTymEaTFIpbZ8" width={62} alt="" />
                </h3>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email manzilingiz</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email"
                    aria-describedby="emailHelp" onChange={handleChangeInput} value={email} />
                    
                    <small id="emailHelp" className="form-text text-muted">
                        Email manzilingizni havfsiz saqlashingizni so'raymiz !
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Parol</label>

                    <div className="pass">
                        
                        <input type={ typePass ? "text" : "password" } 
                        className="form-control" id="exampleInputPassword1"
                        onChange={handleChangeInput} value={password} name="password" />

                        <small onClick={() => setTypePass(!typePass)} style={{color: "black"}}>
                            {typePass ? <span className="material-icons mt-2">visibility_off</span> : <span className="material-icons mt-2">visibility</span>}
                        </small>
                    </div>
                   
                </div>
                
                <button type="submit" className="btn btn-dark w-100 bg-success"
                disabled={email && password ? false : true}>
                    Tizimga kirish
                </button>

                <p className="my-2">
                    Profilingiz mavjud emasmi ? <Link to="/register">Ro'yhatdan o'ting</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
