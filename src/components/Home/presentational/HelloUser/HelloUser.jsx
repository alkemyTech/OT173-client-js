import "./HelloUser.scss"
const HelloUser = (name) => {
  return (
    <h1 className="hello">Hello {name}! Welcome Back! <span className="hello-hand">&#128400;</span></h1>
  )
}

export default HelloUser