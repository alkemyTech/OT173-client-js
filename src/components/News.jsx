import React, { useEffect } from 'react'
import { get } from './../services/apiService';

export const News = () => {

  useEffect(() => {
    const getNews = async()=>{
      const resp = await get('news')

      console.log('reso', resp)
    }

    getNews()
  }, [])
  



  return (
    <div>News</div>
  )
}
