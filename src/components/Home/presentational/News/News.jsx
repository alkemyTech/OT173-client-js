import { useState,useEffect } from "react"
import axios from "axios"
import "./News.scss"
const News = () => {
  const [news,setNews] = useState([])
  useEffect(()=>{
    const newsRequest = async ()=>{
        try{
            const newsResponse = await axios.get("")
            setNews(newsResponse.data)
        }catch(err){
            console.log(err.message)
        }
    }
    newsRequest()
  },[])
  return (
    <div className='container'>
        <h2 className='news-title'>Lastest News</h2>
        <div className='news'>
            {news.map((newSlide,i)=>{
                return(
                    <div className='news__new' key={i}>
                        <div className='news__new--image'>
                            <img src={newSlide.image} alt="" />
                        </div>
                        <p className='news__new--info'>{newSlide.text}</p>
                    </div>
                )
            })}
        </div>
        <div className='news__btn'>
            <button className='news__btn__see'>See More</button>
        </div>
    </div>
  )
}

export default News