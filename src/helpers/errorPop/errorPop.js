export const popError = (setError)=>{
    setError(true)
    setTimeout(()=>{
        setError(true)
      },5000)
}