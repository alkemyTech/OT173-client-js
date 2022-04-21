import { useState,useEffect } from "react"
import axios from "axios"
import NewsStyles from "./News.module.css"
const News = () => {
  const [news,setNews] = useState([])
  /* useEffect(()=>{
    const newsRequest = async ()=>{
        try{
            const newsResponse = await axios.get("")
            setNews(newsResponse.data || []) 
        }catch(err){
            console.log(err.message)
        }
    }
    newsRequest()
  },[]) */
  return (
    <div className={NewsStyles.container}>
        <h2 className={NewsStyles.news_title}>Lastest News</h2>
        <div className={NewsStyles.news}>
            {news.map((newSlide,i)=>{
                return(
                    <div className={NewsStyles.news_new} key={i}>
                        <div className={NewsStyles.news_new_image}>
                            <img src={newSlide.image} alt={newSlide.title}/>
                        </div>
                        <p className={NewsStyles.news_new_info}>{newSlide.text}</p>
                    </div>
                )
            })}
        </div>
        <div className={NewsStyles.news_btn}>
            <button className={NewsStyles.news_btn_see}>See More</button>
        </div>
    </div>
  )
}

export default News