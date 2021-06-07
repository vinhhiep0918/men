import React, { useEffect } from 'react'
import { useForm, } from 'react-hook-form'
import { useHistory, Link, useParams } from 'react-router-dom'

const LoginForm = (props) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  let history = useHistory();
  async function onSubmit(data) {
    let result = await
      fetch('http://localhost:3001/user')
    result = await result.json();
    var b = true;
    result.map(a => {
      if (a.username == data.username & a.passworld == data.passworld) {
        localStorage.setItem('name',a.username)
        history.push('/admin/product')
        b = false
        // props.onUser(a)
      }
    })
    if (b == true) {
      window.confirm('Tài Khoản Không Đúng Mời Nhập Lại !')
      history.push('/login')
    }

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-user" /></span>
        </div>
        <input type="text" {...register('username', { required: true })} className="form-control" placeholder="username" required />
      </div>
      <div className="input-group form-group">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-key" /></span>
        </div>
        <input type="password" {...register('passworld', { required: true })} className="form-control" placeholder="password"  required/>
      </div>
      <div className="row align-items-center remember">
        <input type="checkbox" />Remember Me
        </div>
      <div className="form-group" style={{ textAlign: 'right' }}>
        <button type="submit" class="btn btn-warning" >Login</button>
      </div>
    </form>
  )
}

export default LoginForm
