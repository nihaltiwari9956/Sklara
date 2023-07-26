import React from 'react'

const Step7 = () => {
    return (
        <div className='col-md-4 px-5 mx-auto'><div className="border_input ">
            <label htmlFor="">Dashboard language</label>
            <select >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
        </div><div className="border_input ">
                <label htmlFor="">Dashboard theme</label>
                <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div><div className="border_input ">
                <label htmlFor="">Default mode</label>
                <select >
                    <option>Training</option>
                    <option>Coaching</option>

                </select>
            </div></div>
    )
}

export default Step7