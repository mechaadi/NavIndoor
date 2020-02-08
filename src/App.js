import React, { useEffect } from 'react';
import logo from './logo.svg';
import a7a from './a7around.png'
import codes from './codes.png'
import wiki from './wiki.jpg'
import './App.css';
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mapwize from 'mapwize-ui'
import { Wave1, Wave2, Random1, Random2 } from './landing.js';
import one from './assets/images/1.png';
import two from './assets/images/2.png';
import three from './assets/images/3.png';
// import four from './assets/images/4.png';



function App() {


  useEffect(() => {


  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className="container" style={{ marginTop: '40px' }}>
          <img src={a7a} className="App-logo" alt="logo" />
          <br />
          <br />
          <h1 style={{ fontSize: '72px' }}>NavIndoor</h1>
          <Random1 />

          <br />
          <br />

          <h4>SHORT DEMO VIDEO</h4>
          <br />
          <div class="row">
            <div class="col-12">
              <div className='player-wrapper'>
                <ReactPlayer
                  className='react-player'
                  url='https://youtu.be/7j3TTeOb1RM'
                  width='100%'
                  height='100%'
                />
              </div>
            </div>

            <br />
            <br />

            <div>
              <p>
                Demonstrating the AR feature of our app. Augmented shop banners in real-word using UI components like cards (div tags), text (p and heading tags)
           </p>

              <div class="row" style={{ marginTop: '60px' }}>
                <div class="col-12 col-sm-12 col-md-6">
                  <div class="card card-1" style={{ borderRadius: '50px' }} onClick={() => {
                    window.open('https://github.com/mechaadi/navindoor', '_code')
                  }}>
                    <div class="row">
                      <div class="col-12">
                        <h3 class="text-center" style={{ color: 'black', padding: '10px' }}>GITHUB REPO</h3>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="col-12 col-sm-12 col-md-6">
                  <div class="card card-1" style={{ borderRadius: '50px', padding: '10px' }} onClick={() => {
                    window.open('https://github.com/mechaadi/navindoor/wiki', '_code')
                  }}>
                    <div class="row">
                      <div class="col-12">
                        <h3 class="text-center" style={{ color: 'black', }}>GITHUB WIKI</h3>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <br />   <br />   <br />

            
                <h5 style={{margin:'10px'}}> OUR INDOOR NAVIGATION IMPLEMENTATION USING MAPWISE - A THIRD PARTY LIBRARY</h5>

                <p>Before taking the demo, please read the steps carefully.</p>

                <br/> <br/> <br/>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-6">
                    <img src={one} width='80%' />
                  </div>
                  <div class="col-12 col-sm-12 col-md-6">
                      Click on the hamburger Button to open the side navigation drawer
                  </div>
                </div>

                <br/> <br/> <br/>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-6">
                    <img src={two} width='80%'/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6">
                      Click on <b>Enter an access key</b>, this will open a popup dialog where you can enter the test access key.
                  </div>
                </div>

                <br/> <br/> <br/>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-6">
                    <img src={three} width='80%'/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6">
                      Enter the test access key <b>M3KUNujnHwkSJBMJ</b> and then click on send button.
                  </div>
                </div>

                <br/> <br/> <br/>
                <div class="row">
                  <div class="col-12 col-sm-12 col-md-6">
                    <img src={three} width='80%'/>
                  </div>
                  <div class="col-12 col-sm-12 col-md-6">
                      And that's it, you will be greeted by a map with indoor navigation system (just a prototype).
                  </div>
                </div>
                
                
                <div class="card card-1" style={{ borderRadius: '50px', padding: '10px', marginLeft:'10px' }} onClick={() => {
                  window.open('/demo', '_code')
                }}>
                  <div class="row">
                    <div class="col-12">
                      <h3 class="text-center" style={{ color: 'black', }}>QUICK DEMO</h3>
                    </div>
                    
                  </div>

                </div>
            

                <p style={{fontSize: '14px'}}>**This is just a landing page with prototype of our project, this is not even 40% of the whole project concept, this prototype is not intended to participate into any final pitching and a lot of work is still on it's way</p>
          
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
