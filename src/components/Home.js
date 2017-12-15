import React, { Component } from 'react';
import '../index.css';


class Home extends Component {
  render() {
    return (
      <div>
          <section className='home-header panel'>
                <div>
                    <img src='../images/logo.png'/> 
                    SHELFIE
                </div>
          </section>
          <section className='home-main-content panel'>
                <div>
                    <div>
                      <div className='shelf-button'>Shelf A</div>
                      <div className='shelf-button'>Shelf B</div>
                      <div className='shelf-button'>Shelf C</div>
                      <div className='shelf-button'>Shelf D</div>
                    </div>
                </div>
          </section>
      </div>
    );
  }
}

export default Home;
