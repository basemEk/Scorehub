import React from 'react'
import './PlansAndPrices.css'
import Chatbot from '../../components/Chatbot/Chatbot'
import cbot from '../../assets/chatbot.png'

export default function PlansAndPrices() {
  return (
    <>
      <Chatbot cbot={cbot}/>

      <div className='plans-wrapper'>

        <section className='container plans-heading py-5'>
            <div className="plans-heading">
                <h1>PLANS & PRICES</h1>
                <p>Few lines about our bundles</p>
            </div>
        </section>

        {/* <section className='container plans-section'>
            <div class="row plans-row">
                <div className="col-lg-3 col-4 card-plans plan-1">
                    <div className='circle-plan free-plan-1'><p>FREE</p></div>
                      <div className='cards-contents'>
                        <h5>TRAIL</h5>
                        <p id="card-text">Free! 30 Days</p>
                        <button type="button" class="btn btn-light btn-lg">GET IT NOW</button>
                     </div>
                </div>
                <div className="col-lg-3 col-4 card-plans plan-2">
                    <div className='circle-plan free-plan-2'><p>$150</p></div>
                    <div className='cards-contents'>
                        <h5>YEARLY</h5>
                        <p>Save $98 every year compared to the monthly plan by paying yearly </p>
                        <button type="button" class="btn btn-light btn-lg">GET IT NOW</button>
                    </div>
                </div>
                <div className="col-lg-3 col-4 card-plans plan-3">
                    <div className='circle-plan free-plan-3'><p>$70</p></div>
                    <div className='cards-contents'>
                        <h5>TRAIL</h5>
                        <p>Save $98 every year compared to the monthly plan by paying yearly</p>
                        <button type="button" class="btn btn-light btn-lg plan-btn">GET IT NOW</button>
                    </div>
                </div>
            </div>
        </section> */}

        <section>
          <div className='plan-wrapper'>
            <div className='plan-card plan-1'>
                <div className='plan-circle plan-circle-one'>
                    <p>FREE</p>
                </div>
                <div className='plan-text'>
                  <h5>TRAIL</h5>
                  <p>Free! 30 Days</p>
                </div>
                <div className='plan-btn'>
                  <button type="button" class="btn btn-light btn-lg plan-btn p1-btn">GET IT NOW</button>
                </div>
            </div>
            <div className='plan-card plan-2'>
                <div className='plan-circle plan-circle-two'>
                    <p>$150</p>
                </div>
                <div className='plan-text'>
                  <h5>YEARLY</h5>
                  <p>Save $98 every year compared to the monthly plan by paying yearly</p>
                </div>
                <div className='plan-btn'>
                  <button type="button" class="btn btn-light btn-lg plan-btn">GET IT NOW</button>
                </div>
            </div>
            <div className='plan-card plan-3'>
                <div className='plan-circle plan-circle-three'>
                    <p>$70</p>
                </div>
                <div className='plan-text'>
                  <h5>MONTHLY</h5>
                  <p>Save $98 every year compared to the monthly plan by paying yearly</p>
                </div>
                <div className='plan-btn'>
                  <button type="button" class="btn btn-light btn-lg plan-btn">GET IT NOW</button>
                </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
