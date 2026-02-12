export default function Protected({children}){
  if(!localStorage.getItem('token')){
    window.location='/'
    return null
  }
  return children
}
