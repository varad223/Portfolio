import React from 'react';
import experienc from './data/experience.json';
const experience = () => {
  return (
    <>
      <div className="container ex" id='experience'>
        <h1>Experience</h1>
        {
          experienc.map((data) => {
            return (
              <>
                <div key={data.id} className="ex-items text-center my-5"
                  data-aos="zoom-in"
                  data-aos-duration="900">
                  <div className='left'>
                    <img src={`/assets/${data.imageSrc}`} alt="" />
                  </div>
                  <div className="right">
                    <h2>{data.role}</h2>
                    <h4>
                      <span style={{ color: "yellowgreen" }}>
                        {data.startDate}{" "}{data.endDate}{" "}</span>
                      <span style={{ color: "yellow" }}>{data.location}</span>
                    </h4>
                    <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                    <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default experience
