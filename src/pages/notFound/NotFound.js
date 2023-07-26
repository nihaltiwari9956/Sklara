import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const NotFound = ({userdata}) => {
    return (
        <>
        <Navbar userdata={userdata} />
        
        <div className='container my-5'>
            <h1 className='text-center fw-light'><span className='display-1'>404 </span> Page not found!</h1>
            
        </div>
<Footer/>
        </>
    )
}

export default NotFound
