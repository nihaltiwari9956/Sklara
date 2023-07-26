import React from 'react'

function Step4({paymentOption, feesPerParticipants,setFeesPerParticipants,paymentMode,setPaymentMode,amount,setAmount}) {
  
  return (
    <div style={{paddingLeft: '32px'}}>
            <p style={{marginBottom: '0px', fontSize: '24px'}} className='fw-bold'>Creative Thinking for Beginers</p>
            <p className='text-muted'>Enter further details. Save to edit and publish later or publish to reach out to your customers.</p>

            <p style={{marginBottom: '0px'}} className='fw-bold'>Setup payment mode for your customer</p>
            <p className='text-muted'>Submitting this form will be published to the marketplace</p>
    
            <p style={{marginBottom: '0px'}} className='fw-bold'>Price per participant</p>
            <form style={{width:'28vh'}} class="d-flex form_bar">
              <input type='number' value={feesPerParticipants} onChange={(e)=>setFeesPerParticipants(e.target.value)} style={{boxShadow: '0px 0px 4px rgb(0 0 0 / 25%)'}} class="form-control search-input" />
            </form> 

            <div style={{ marginBottom: "-22px" }} className="d-flex align-items-center flex-wrap my-4">
                <div style={{ marginRight: "10px" }} className="d-flex flex-column">
                    <p className='fw-bold my-0'>Payment Type</p>
                    <div style={{margin: '10px 0px'}} className="border_input">
                            <select style={{borderBottom: 'none'}} value={paymentMode} onChange={(e)=>setPaymentMode(e.target.value)}>
                                <option>{paymentOption}</option>
                            </select>
                    </div>
                </div>

                <div className="d-flex flex-column">
                    <p className='fw-bold my-0'>Enter Amount</p>
                    <div style={{margin: '10px 0px'}} className="border_input">
                            <select style={{borderBottom: 'none'}} value={amount} onChange={(e)=>setAmount(e.target.value)}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                    </div>
                </div>

           </div>

            <p style={{marginBottom: '0px'}} className='text-muted mt-4 small'>Based on your input you will earn 2000€ for this event,</p>
            <p className='text-muted small'> considering 20 participants signs up for the event| considering 20 participants signs up for the event.</p>
    
           
    </div>
  )
}

export default Step4