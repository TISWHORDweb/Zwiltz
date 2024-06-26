import React from 'react'
import Img1 from '../../Assets/images/unnion.png'
import Img2 from '../../Assets/images/icon2.png'
import Img3 from '../../Assets/images/icon3.png'
import Img4 from '../../Assets/images/icon4.png'
import Img5 from '../../Assets/images/ato.png'
import Img6 from '../../Assets/images/datta.png'
import Img7 from '../../Assets/images/figga.png'
import Img8 from '../../Assets/images/frame.png'
import Img9 from '../../Assets/images/photo.png'
import Img10 from '../../Assets/images/rotate.png'
import Img11 from '../../Assets/images/shopify.png'
import Img12 from '../../Assets/images/uid.png'
import Img13 from '../../Assets/images/wix.png'
import Img14 from '../../Assets/images/cinema.png'
import Icon from '../../Assets/images/icon1.png'
import Icon2 from '../../Assets/images/icon5.png'


function Section1() {
    return (
        <div>
            <div className=" pt-3">
                <img src={Img1} alt="" className='w100 patch' />
                <div className="Section1 ">
                    <div className="container ">
                        <center>
                            <div className="top-text">
                                <h2>Your one-stop marketplace for finding <br /> the talent your business needs.</h2>
                            </div>
                        </center>
                        <div className="margin60"></div>

                        <div className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <div className="set mt-4">
                                    <h6>Find Dev and IT professionals to scale your business.</h6>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="small">
                                                <img src={Img3} alt="" />
                                                <p>989 Skills</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="small">
                                                <img src={Img2} alt="" />
                                                <p>45 Sub-Categories</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="small">
                                                <img src={Img4} alt="" />
                                                <p>1011 Profiles</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-7 mb-3">
                                <div className="cardd">
                                    <h6>IT & Development</h6>
                                    <div className="stacks">
                                        <div className="each">
                                            <img src={Img11} alt="" />
                                            <p>Shopify <br /> Developer</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img8} alt="" />
                                            <p>Magento <br /> Developer</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img6} alt="" />
                                            <p>Data <br /> Scientist</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img13} alt="" />
                                            <p>Webflow <br /> Developer</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img10} alt="" />
                                            <p>Dot Net <br /> Developer</p>
                                        </div>
                                        <div className="each mt-4">
                                            <button className='btn-light'><img src={Icon} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-4 mb-3">
                                <div className="set mt-4">
                                    <h6>Explore Creative individuals with a keen eye for detail.  </h6>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="small">
                                                <img src={Img3} alt="" />
                                                <p>989 Skills</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="small">
                                                <img src={Img2} alt="" />
                                                <p>45 Sub-Categories</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="small">
                                                <img src={Img4} alt="" />
                                                <p>1011 Profiles</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-7 mb-3">
                                <div className="cardd">
                                    <h6>Design & Creative</h6>
                                    <div className="stacks">
                                        <div className="each mt-4">
                                            <button className='btn-light'><img src={Icon} alt="" /></button>
                                        </div>
                                        <div className="each">
                                            <img src={Img7} alt="" />
                                            <p>UX <br /> Designer</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img9} alt="" />
                                            <p>Graphics <br /> Designer</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img5} alt="" />
                                            <p>Illustration <br /> Artist</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img12} alt="" />
                                            <p>Unreal <br /> Engine</p>
                                        </div>
                                        <div className="each">
                                            <img src={Img14} alt="" />
                                            <p>Cinema <br /> 4D</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4 ">
                            <div className="col-md-4 mb-3">
                                <div className="flex">
                                    <button className='btn-dark'><img src={Icon2} alt="" /></button>
                                    <p className='m-0 ms-2'>Explore More</p>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                            <div className="col-md-7 mb-3">
                                <p className='mt-3'><b>30 more</b> to explore</p>
                            </div>
                        </div>
                        <div className="pad">
                            <div className="padding50"></div>
                        </div>
                        <div className="marg">
                            <div className="margin50"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Section1