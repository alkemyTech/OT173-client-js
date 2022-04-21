import HelloUserStyles from "./HelloUser.module.css"
const HelloUser = () => {
  return (
    <h1 className={HelloUserStyles.hello}>Hello Roberto! Welcome Back! <span className={HelloUserStyles.hello_hand}>&#128400;</span></h1>
  )
}

export default HelloUser