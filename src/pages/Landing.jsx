import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/Up2T.gif'
import Card from 'react-bootstrap/Card';
import settings from '../assets/settings.png'
import category from '../assets/category.png'
import history from '../assets/history.png'

function Landing() {
  return (
    <>
      {/* landing section */}
      <div className="container landing">
        <div className="row align-items-center my-5">
          <div className="col-lg-5">
            <h3 >Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore dicta iste totam quidem aliquam ullam odio molestias a itaque doloremque libero eligendi quod soluta sint voluptate autem, facilis rerum? Maxime.</p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img src={landingImg} alt="Landing Image" />
          </div>
        </div>
      </div>

      {/* features */}
      <div className="container my-5 features">
        <h1 className='text-center text-warning'>Features</h1>
        <div className="row mt-5">
          <div className="col-lg-4">
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={settings} />
              <Card.Body>
                <Card.Title>Managing Videos</Card.Title>
                <Card.Text>
                 Users can upload,view and remove the videos.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>

         <div className="col-lg-4">
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={category} />
              <Card.Body>
                <Card.Title>Categorize  Videos</Card.Title>
                <Card.Text>
                 Users can categorize the video by drag and drop feature.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>

          <div className="col-lg-4">
            <Card style={{ width: '20rem' }} className='p-3'>
              <Card.Img variant="top" src={history} />
              <Card.Body>
                <Card.Title>Managing History</Card.Title>
                <Card.Text>
                 Users can manage  the watch history of all video.
                </Card.Text>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div>

      {/* footer section */}

      <div className="container w-100 border border-white rounded border-3 p-5 ">
        <div className="row">

          <div className="col-lg-6">

            <h3 className='text-warning'>Simple Fast and powerfull</h3>
            <div className='text-white mt-5'>
              <p><span className='fw-boldm fs-5'>Play Everything:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quas, dolores deserunt ducimus hic deleniti provident </p>
              <p><span className='fw-boldm fs-5'>Categorize Video:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quas, dolores deserunt ducimus hic deleniti provident </p>
              <p><span className='fw-boldm fs-5'>Manage History:</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo quas, dolores deserunt ducimus hic deleniti provident </p>
            </div>

          </div>

          <div className="col-lg-6 p-5">
            
          <iframe width="460" height="315" src="https://www.youtube.com/embed/d9MyW72ELq0?si=QLWlMXrcTiV8IxLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing