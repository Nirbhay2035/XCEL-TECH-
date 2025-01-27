import React from 'react';

function Cards() {
    return (
        <div className=" container cards-container mt-5  pb-3 pt-2 " style={{backgroundColor:'transparent', borderRadius:'10px', border: '1px solid white'}}>
            <h1 className='text-center mb-4'>Recent Blogs</h1>
            <div className="row" >
                {/* Card 1 */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{backgroundColor:'black'}}>
                        <img src="https://th.bing.com/th/id/OIP.HM664gtdbHVkOXvWG4X3LAHaE7?rs=1&pid=ImgDetMain" className="card-img-top" alt="Card 1" />
                        <div className="card-body">
                            <h5 className="card-title text-light">How To Connect Wi-Fi With QR Code: A Complete Guide </h5>
                            <p className="card-text pt-2">Wi-Fi QR codes simplify network access by allowing users to connect without manually entering passwords. They enhance security and convenience, especially in public spaces or multi-user...</p>
                            <a href="#" >Read More</a>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-md-4 mb-4">
                    <div className="card " style={{backgroundColor:'black'}}>
                        <img src="https://th.bing.com/th/id/OIP.HM664gtdbHVkOXvWG4X3LAHaE7?rs=1&pid=ImgDetMain" className="card-img-top" alt="Card 2" />
                        <div className="card-body">
                            <h5 className="card-title text-light">Importance Of Relible Wifi Setup With XCEL_TECH</h5>
                            <p className="card-text pt-2">A stable and high-speed Wi-Fi connection is essential for successful trading, ensuring access to real-time data and swift execution of trades. Reliable internet with low latency minimizes disruptions...</p>
                            <a href="#" >Read More</a>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-md-4 mb-4">
                    <div className="card" style={{backgroundColor:'black'}}>
                        <img src="https://th.bing.com/th/id/OIP.HM664gtdbHVkOXvWG4X3LAHaE7?rs=1&pid=ImgDetMain" className="card-img-top" alt="Card 3" />
                        <div className="card-body text-light">
                            <h5 className="card-title">Choosing The Right Leased Line Provider: Why XCEL-TECH is th...</h5>
                            <p className="card-text pt-2">A leased line is a dedicated internet connection designed for businesses requiring consistent speeds and secure connectivity. It differs from broadband by offering symmetrical upload and download speeds...</p>
                            <a href="#" >Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <a href='https://support.lenovo.com/'>
                    <button className="btn btn-primary">View More</button>

                </a>
            </div>
        </div>

    );
}

export default Cards;

