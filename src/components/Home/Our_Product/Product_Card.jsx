import React from "react";
import { FaGreaterThan } from 'react-icons/fa';
import css from '../Our_Product/Product_card.module.css';

const Product_Card = () => {
  return (
    <div>
      <section className={css.articles}>
        <article>
          <div className={css.articleWrapper}>
            <figure>
              <img src="https://picsum.photos/id/1011/800/450" alt="" />
            </figure>
            <div className={css.articleBody}>
              <h2>Class Room Program</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className={css.readMore}>
                Learn More <FaGreaterThan className="greater"/>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className={css.articleWrapper}>
            <figure>
              <img src="https://picsum.photos/id/1005/800/450" alt="" />
            </figure>
            <div className={css.articleBody}>
              <h2>Frequent Mock Test</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className={css.readMore}>
                Learn More <FaGreaterThan className="greater"/>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className={css.articleWrapper}>
            <figure>
              <img src="https://picsum.photos/id/103/800/450" alt="" />
            </figure>
            <div className={css.articleBody}>
              <h2>Live Online Classes</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className={css.readMore}>
                Learn More <FaGreaterThan className={css.greater}/>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className={css.articleWrapper}>
            <figure>
              <img src="https://picsum.photos/id/103/800/450" alt="" />
            </figure>
            <div className={css.articleBody}>
              <h2>Recorded Lectures</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className={css.readMore}>
                Learn More <FaGreaterThan className={css.greater}/>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Product_Card;
