import { Search } from '@mui/icons-material'
import React from 'react'

const Step2 = () => {
    return (
        <div className='container-fluid'>
            <div className="d-flex align-items-center justify-content-center flex-column mb-2" style={{ textAlign: 'center' }}>
                <h5>Select the Skills you want to develop</h5>
                <p className="text-muted" >Now, choose some skills you would like to develop so we can better curate your learning experience</p>
                <div className="search-bar my-4">
                    <Search className='ms-2' />
                    <input type="text" name="" id="" placeholder='Search' className='search' />
                </div>
                <div className="d-flex align-items-center flex-wrap justify-content-center" >
                    {[1, 2, 3, 4, 5, 6].map(() =>
                        <div className="col-md-3 m-4 px-3 py-5 shadow_new d-flex flex-column justify-content-center align-items-center">
                            <h5>Product Manager</h5>
                            <p className='text-muted text-align-center'>Lorem ipsum dolor sit Lorem ipsum dolor sit amet.S di veritatis quod?</p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Step2