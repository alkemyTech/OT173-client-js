import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import { popError } from '../../../helpers/errorPop/errorPop'
const SelectedNew = () => {
    const {id} = useParams()
    const [error,setError] = useState(null)
    const [selectedNew, setSelectedNew] = useState(null)
    useEffect(()=>{
        const fetchNew = async ()=>{
            try {
                const newResponse = await axios.get("")
                setSelectedNew(newResponse.data)
            } catch (error) {
                popError(setError)
            }
        }
        fetchNew()
    },[])
  return (
    <div>
        {selectedNew && 
          <div>
            <h2>as</h2>
          </div>
        
        }
    </div>
  )
}

export default SelectedNew