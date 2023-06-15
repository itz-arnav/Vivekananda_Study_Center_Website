import React from "react";
import { FaGreaterThan } from 'react-icons/fa';

const Product_Card = () => {
  return (
    <div>
      <section className="articles">
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/1011/800/450" alt="" />
            </figure>
            <div className="article-body">
              <h2>Class Room Program</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className="read-more">
                Learn More <FaGreaterThan className="greater"/>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/1005/800/450" alt="" />
            </figure>
            <div className="article-body">
              <h2>Frequent Mock Test</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className="read-more">
                Learn More <FaGreaterThan className="greater"/>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/103/800/450" alt="" />
            </figure>
            <div className="article-body">
              <h2>Live Online Classes</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className="read-more">
                Learn More <FaGreaterThan className="greater"/>
              </a>
            </div>
          </div>
        </article>
        <article>
          <div className="article-wrapper">
            <figure>
              <img src="https://picsum.photos/id/103/800/450" alt="" />
            </figure>
            <div className="article-body">
              <h2>Recorded Lectures</h2>
              <p>
                Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                egestas.
              </p>
              <a href="#" className="read-more">
                Learn More <FaGreaterThan className="greater"/>
              </a>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Product_Card;
