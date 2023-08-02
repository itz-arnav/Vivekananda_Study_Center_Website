import React from "react";
import css from"../Feature/Feature.module.css";
export const Feature = () => {
  return (
    <>
      <div>
        <p className={css.p1}>Key Features</p>
      </div>
      <div className={css.container}>
        <div className={css.card}>
          <h3 className={css.title}>INTERACTIVE CLASSROOMS</h3>
          <div className={css.bar}>
            <div className={css.emptybar}></div>
            <div className={css.filledbar}></div>
          </div>
          <div className={css.written}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              minima nesciunt laudantium, aperiam illum eveniet voluptates earum
              aliquid repellendus vel quis quod! Aspernatur cupiditate in qui
              consequatur repellendus dolores id?
            </p>
          </div>
          <div className={css.circle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className={css.stroke} cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div className={css.card}>
          <h3 className={css.title}>STUDY MATERIALS</h3>
          <div className={css.bar}>
            <div className={css.emptybar}></div>
            <div className={css.filledbar}></div>
          </div>
          <div className={css.written}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              minima nesciunt laudantium, aperiam illum eveniet voluptates earum
              aliquid repellendus vel quis quod! Aspernatur cupiditate in qui
              consequatur repellendus dolores id?
            </p>
          </div>
          <div className={css.circle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className={css.stroke} cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div className={css.card}>
          <h3 className={css.title}>FREQUENT MOCK TEST</h3>
          <div className={css.bar}>
            <div className={css.emptybar}></div>
            <div className={css.filledbar}></div>
          </div>
          <div className={css.written}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              minima nesciunt laudantium, aperiam illum eveniet voluptates earum
              aliquid repellendus vel quis quod! Aspernatur cupiditate in qui
              consequatur repellendus dolores id?
            </p>
          </div>
          <div className={css.circle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className={css.stroke} cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
        <div className={css.card}>
          <h3 className={css.title}>EXPERT TEACHERS</h3>
          <div className={css.bar}>
            <div className={css.emptybar}></div>
            <div className={css.filledbar}></div>
          </div>
          <div className={css.written}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio,
              minima nesciunt laudantium, aperiam illum eveniet voluptates earum
              aliquid repellendus vel quis quod! Aspernatur cupiditate in qui
              consequatur repellendus dolores id?
            </p>
          </div>
          <div className={css.circle}>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className={css.stroke} cx="60" cy="60" r="50" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};
