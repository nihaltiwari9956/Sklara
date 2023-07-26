import React, { useState } from 'react'
import StepperForm from '../StepperForm'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'
import Step6 from './Step6'
import Step7 from './Step7'
const SPForm = () => {
    const [step, setstep] = useState(1)
    const getStep = (item) => {
        setstep(item)
    }
    console.log(step);
    return (
        <div className='container-fluid '>
            <StepperForm getStep={getStep} steps={step} />
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}
            {step === 5 && <Step5 />}
            {step === 6 && <Step6 />}
            {step === 7 && <Step7 />}

            <div className='d-flex justify-content-end my-5 pt-5 px-5'>
                <button className='btn px-3 py-2 btn-light round_btn' style={{ backgroundColor: '#fff', border: '1px solid grey', color: 'grey', width: '130px', fontWeight: '600' }}>Cancel</button>
                <button className='btn px-3 py-2 btn-primary round_btn' onClick={() => setstep(prev => prev + 1)} style={{ "padding": "0 20px", fontWeight: '600', width: '130px', marginLeft: '20px' }}> Continue</button>
            </div>

        </div>
    )
}

export default SPForm