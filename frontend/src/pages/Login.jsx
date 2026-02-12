import { useState } from 'react'
import axios from 'axios'

export default function Login(){
  const [u,setU]=useState('')
  const [p,setP]=useState('')

  const login = async e=>{
    e.preventDefault()
    const r = await axios.post(
      'http://localhost:3000/auth/login',
      { username:u, password:p }
    )

    localStorage.setItem('token', r.data.token)
    window.location='/app'
  }

  return (
    <form onSubmit={login}>
      <input onChange={e=>setU(e.target.value)} />
      <input type="password" onChange={e=>setP(e.target.value)} />
      <button>Entrar</button>
    </form>
  )
}
