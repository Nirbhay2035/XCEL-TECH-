import React from 'react'

function BestSelling() {
    return (
        <div>
            <div className="best-container">
                <div className="circle"></div>

                <div className="info">
                    <p className="plan-title">Best Selling Plan in <span className="location">Mumbai</span></p>
                    <p className="plan-details">
                        Unlimited Data per month with 30+ OTTs<br /><span className="speed">@200 Mbps</span> Speed
                    </p>
                    <p className="plan-includes">Free Installation and Dual Band Router included</p>
                    <div className="price-container">
                        <em>at just</em>
                        <div className="price">
                            <span className="price-value"><i>₹</i> 3750</span>
                            <sub className="validity">for <span id="bsp-validity">3 Months</span></sub>
                        </div>
                        <div className="tax-info">* exclusive of taxes</div>
                    </div>
                    <div className="cta-buttons">
                        <a className="buy-now" href="/" >Buy Now</a>
                        <a className="more-plans" href="/">More Plans</a>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default BestSelling;
