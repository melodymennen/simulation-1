import React, { Component } from 'react';
import '../index.css';
import logo from '../images/logo.png'


class Home extends Component {
  render() {
    return (
      <div>
          <section className='home-header panel'>
                <div>
                  <div className='logo-wrapper'>
                      <div>
                        <img src={logo}/> 
                      </div>
                      <div>
                        SHELFIE
                      </div>
                  </div>
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

// Simulation-1 37E-2
export default Home;
