import React, { useEffect, useState } from 'react'
import Search from '../../Components/Search'
import Img from '../../Assets/Background/text-img.png'
import Jobs from '../../Data/Jobs.json'

function Banner() {
    const [jobs, setJobs] = useState()
    useEffect(() => {
        setJobs(Jobs.jobs)
    }, [])
    console.log(jobs)
    return (
        <div>
            <div className="Banner mb-5">
                <div className="margin100"></div>
                <center>
                    <div className="upper-text">
                        <h3>Finding the right fit <span><img src={Img} className='w65' alt="" /></span>  has <br /> never been easier.</h3>
                        <p>With our rigorous pre-vetting process, you'll never have to <br /> worry about finding the ideal candidate ever again.</p>
                        <Search />
                    </div>
                </center>
                <div className="margin40"></div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="jobs">
                            <center>
                                <div className="col-md-5">
                                    <div className="top mb-4">
                                        <span className='active'>IT & Development</span>
                                        <span>Design and Creative</span>
                                    </div>
                                </div>
                            </center>
                            <div className="list">
                                <div className="row">
                                    {jobs ?
                                        <>{jobs.map((each, i) => (
                                            <div className="col-md-4" key={i}>
                                                <p>{each.job}</p>
                                            </div>
                                        ))} </>
                                        : null}
                                    <div className="col-md-4">
                                        <p><b className='black'>Explore More</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner