import React from 'react'
import './Appointment.css'

const Appointment = () => {
    return (
        <div class="appo_panel first" >
            <div class="row">
                <div class="col-md-3 col-6" style={{ marginBottom: '20px' }}>
                    <select class="custom-select custom-select-sm border-0 shadow-sm ml-2 select2-hidden-accessible list-group-item">
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>

                </div>
                <div class="col-md-9 col-6">
                    <div style={{ margiTop: '8px', marginLeft: '-15px' }}>minutes</div>
                </div>
            </div>
            <ul class="list-group list-group-horizontal-sm">
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>10:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>11:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px', backgroundColor: '#b7bbbb', color: '#8e9292' }}>12:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>13:00</li>
            </ul>
            <ul class="list-group list-group-horizontal-sm" style={{ marginTop: '10px' }}>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>14:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>15:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>16:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>17:00</li>
            </ul>
            <ul class="list-group list-group-horizontal-sm" style={{ marginTop: '10px' }}>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>18:00</li>
                <li class="list-group-item" style={{ marginLeft: '30px', bordeLeftWidth: '1px' }}>19:00</li>
            </ul>
            <button className='appointment_btn btn shadow btn-primary text-light coach-btn mt-0'>Book Appointment</button>
        </div>
    )
}

export default Appointment