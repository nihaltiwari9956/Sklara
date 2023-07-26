import React from 'react'

const Step4 = () => {
    return (
        <div className="d-flex align-items-center px-5 flex-wrap">
            <div className="border_input border_purple">
                <label htmlFor="">Department</label>
                <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="border_input ">
                <label htmlFor="">Languages of training</label>
                <input type="text" placeholder='Name' />
            </div>
            <div className="border_input border_purple">
                <label htmlFor="">Languages of communication</label>
                <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="border_input ">
                <label htmlFor="">Highest Education</label>
                <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div className="border_input border_purple">
                <label htmlFor="">Experience in Years</label>
                <input type="text" placeholder='Email ID' />
            </div>
            <div className="border_input ">
                <label htmlFor="">HR (Point of Contact)</label>
                <input type="text" placeholder='Number' />
            </div>
        </div>
    )
}

export default Step4