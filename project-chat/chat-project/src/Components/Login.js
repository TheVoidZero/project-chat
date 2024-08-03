import React, { useState } from 'react'
import '../Style/styles.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [userData, SetUserData] = useState({})
  const navigate = useNavigate()

  /**
   * Obtiene los datos del formulario para setearlos en la variable
   *
   * @param {Event} e
   */
  const getDataForm = e => {
    e.preventDefault(); //Desabilita el funcionamiento de recarga del formulario para que no lo haga
    let data = e.target
    let usuario = {
        email: data.email.value,
        password: data.password.value,
        send: data.send.value,
    };
    console.log(usuario);
    SetUserData(usuario);
    navigate('/home')
  }
  
 /**
  * Cambia los datos conforme se escribe en el formulario
  *
  * @param {Event} e
  */
 const changeData = e => {
    let name_input_select = e.target.name;
    SetUserData(prev_state =>({
      ...prev_state, [name_input_select]: e.target.value
    }))
  }

  return (
    <div className='Login'>
      <div className='form-login'>
        <form onSubmit={getDataForm}>
        <div className='form-header'>
          <label>CHATO</label>
        </div>
          <div className='form-elements'>
            <label>Email:</label>
            <input type='email' placeholder='user@gmail.com' name='email' onChange={changeData}/>
          </div>
          <div className='form-elements'>
            <label>Password:</label>
            <input type='password' placeholder='********' name='password' onChange={changeData}/>
          </div>
          <div className='form-elements'>
            <input type='submit' value='Send' name='send'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login