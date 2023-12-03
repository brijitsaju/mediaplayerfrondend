import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div style={{ width: "100%", height: "300px" }} className='d-flex justify-content-center align-items-center flex-column w-100 mt-5'>
            <div className='footer d-flex justify-content-evenly align-items-center w-100 '>
                <div className="website" style={{ width: "400px" }}>
                    <h4><i class="fa-solid fa-video fa-beat me-4" style={{ color: 'orange' }}></i>{' '}
                        Video Player</h4>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae obcaecati ratione, error nam eligendi corrupti adipisci reprehenderit maiores commodi Lore</h6>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                </div>
                <div className='links d-flex flex-column' >
                    <h3 className='mb-4'> Link</h3>
                    <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Landing Page</Link>
                    <Link to={'/home'} style={{ textDecoration: "none", color: "white" }}>Home Page</Link>
                    <Link to={"/watch"} style={{ textDecoration: "none", color: "white" }}>Watch</Link>
                </div>
                <div className="guides d-flex flex-column">
                    <h3 className='mb-4'>Guides</h3>
                    <Link to={'https://react.dev/'} style={{ textDecoration: "none", color: "white" }}>React</Link>
                    <Link to={'https://react-bootstrap.netlify.app/'} style={{ textDecoration: "none", color: "white" }}>React Bootrap</Link>
                    <Link to={"https://getbootstrap.com/"} style={{ textDecoration: "none", color: "white" }}>bootstrap</Link>
                </div>

                <div className='contact mt-3'>
                    <h3 className='mb-4'>Contact Us</h3>
                    <div className='d-flex mb-4'>
                        <input type="text " className='form-control' placeholder='Enter your emal' />
                        <button className='btn btn-warning text-white ms-2'>Subscribe</button>

                    </div>
                    <div className='icons d-flex justify-content-evenly'>
                        <Link to={'https://www.instagram.com/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                        <Link to={'https://twitter.com/i/flow/login'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-twitter fa-2x"></i> </Link>
                        <Link to={"https://in.linkedin.com/"} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
                        <Link to={"https://www.facebook.com/"} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-facebook fa-2x"></i></Link>


                    </div>
                </div>



            </div>
            <p>Copyright © 2023 Media Player . Built with React</p>
        </div>

    )
}

export default Footer
