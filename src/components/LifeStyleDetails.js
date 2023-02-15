import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useLifestyleContext } from '../context/Lifestyle_context';

const LifeStyleDetails = () => {
    const {recentNews, getSingleNews, singleNews} = useLifestyleContext();

    const {id} = useParams();
    console.log(id)

    


    useEffect(() => {
        getSingleNews(`https://bs-api-ssos.onrender.com/lifestyle/${id}`)
    }, [])

  return (
  <>
  {
        singleNews.map((curElem) => {
            return <>
             <div class="details_page">
        <div class="details_txt">
            <div class="d_txt">
                <button class="travel4">{curElem.category}</button>
                <br/>
                <br/>
                <h1>{curElem.title}</h1>
                <div class="d_txt_p">
                    <p>{curElem.owner}</p>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                <p>{curElem.date}</p>
                </div>
            </div>
        </div>
        <div class="details_img">
            <img src={curElem.image}/>
        </div>
    </div>

    <div class="details_page_txt">
        <div class="description">
            <h2>{curElem.long_description_1}.</h2>
            <br/>
            <h2>{curElem.long_description_2}.</h2>
            <br/>
            <h2>{curElem.long_description_3}.</h2>
            <br/>
            <h2>{curElem.long_description_4}.</h2>
            <br/>
            <h2>{curElem.long_description_5}.</h2>
        </div>
    </div>
            </>
        })
    }
  </>
  )
}


export default LifeStyleDetails