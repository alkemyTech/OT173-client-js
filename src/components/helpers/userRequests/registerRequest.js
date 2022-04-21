export const registerRequest = (dispatch,navigate,v,setError) =>{
    dispatch()
        .then(res=>{
            navigate("/")
        })
        .catch(err=>{
            setError(true)
        })
}