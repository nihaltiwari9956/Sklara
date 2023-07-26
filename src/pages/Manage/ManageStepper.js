import React, { useState } from 'react'
import '../StepperForm/StepperForm.css'
import numberToWords from 'number-to-words'


const ManageStepper = ({ getStep, steps }) => {
    const [step, setstep] = useState(1)

    const toggleStep = (i) => {
        setstep(i)
        getStep(i)
    }

    return (
        <div className='container-fluid py-3 px-4'>
            <div className="row mt-4 mx-1">
                <div className="col-md-5">
                   
                    <p className="mb-0">Step {numberToWords.toWords(step)} of four</p>
                    <ul className='d-flex align-items-center ps-0'>{[1, 2, 3, 4].map((item, i) => <li className={step === item ? 'steps active_step' : 'steps'} onClick={() => toggleStep(item)} key={i}>{item}</li>)}</ul>
                </div>
            </div>
        </div>
    )
}

export default ManageStepper