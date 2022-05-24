import HelloUserStyles from "./HelloUser.module.css"
const HelloUser = ({username}) => {
  return (
    <h1 className={HelloUserStyles.hello}>Hello {username}! Welcome Back! <span className={HelloUserStyles.hello_hand}>&#128400;</span></h1>
  )
}

export default HelloUser