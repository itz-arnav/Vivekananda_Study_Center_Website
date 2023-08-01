import React from 'react'
import css from '../Carousal/Carousal.module.css';
const Carousal =()=> {
  return (
<div>
  <div className={css.carousel}>
    <ul className={css.slides}>
      <input type="radio" name="radio-buttons" id="img-1" defaultChecked/>
      <li className={css.slide-container}>
        <div className={css.slide-image}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Timisoara_-_Regional_Business_Centre.jpg"/>
        </div>
        <div className={css.carousel-controls}>
          <label htmlFor="img-3" className={css.prev-slide}>
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-2" className={css.next-slide}>
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-2" />
      <li className={css.slide-container}>
        <div className={css.slide-image}>
          <img src="https://content.r9cdn.net/rimg/dimg/db/02/06b291e8-city-14912-171317ad83a.jpg?width=1750&height=1000&xhint=3040&yhint=2553&crop=true"/>
        </div>
        <div className={css.carousel-controls}>
          <label htmlFor="img-1" className={css.prev-slide}>
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-3" className={css.next-slide}>
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <input type="radio" name="radio-buttons" id="img-3" />
      <li className={css.slide-container}>
        <div className={css.slide-image}>
          <img src="https://speakzeasy.files.wordpress.com/2015/05/twa_blogpic_timisoara-4415.jpg"/>
        </div>
        <div className={css.carousel-controls}>
          <label htmlFor="img-2" className={css.prev-slide}>
            <span>&lsaquo;</span>
          </label>
          <label htmlFor="img-1" className={css.next-slide}>
            <span>&rsaquo;</span>
          </label>
        </div>
      </li>
      <div className={css.carousel-dots}>
        <label htmlFor="img-1" className={css.carousel-dot} id="img-dot-1"></label>
        <label htmlFor="img-2" className={css.carousel-dot} id="img-dot-2"></label>
        <label htmlFor="img-3" className={css.carousel-dot} id="img-dot-3"></label>
      </div>
    </ul>
  </div>
</div>
  )
}

export default Carousal;