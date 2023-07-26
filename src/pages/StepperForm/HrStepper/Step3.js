import { Add } from '@mui/icons-material'
import Search from '@mui/icons-material/Search'
import React from 'react'

const Step3 = () => {
    return (
        <div className='container-fluid px-5'>
            <div className="d-flex align-items-center justify-content-center flex-column mb-2">
                <h5>Select the Skills you want to develop</h5>
                <p className="text-muted">Now, choose some skills you would like to develop so we can better curate your learning experience</p>
                <div className="search-bar my-4">
                    <Search className='ms-2' />
                    <input type="text" name="" id="" placeholder='Search' className='search' />
                </div>
                <div className="skills d-flex align-items-center flex-wrap">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() =>
                        <div className="skill d-flex align-items-center mx-2 my-3">
                            <h6 className='m-0 '>Enterpreneurship </h6><Add />
                        </div>
                    )}

                </div>
            </div></div>
    )
}

export default Step3