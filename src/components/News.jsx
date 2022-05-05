import React, { useEffect } from 'react'
import { get } from './../services/apiService';

export const News = () => {

  useEffect(() => {
    const getNews = async()=>{
      const {data} = await get('news')

      console.log('reso', data)
    }

    getNews()
  }, [])
  return (
    <div>News</div>
  )
}
