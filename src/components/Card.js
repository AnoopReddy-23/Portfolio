import React from 'react'

function Card(props) {
    
  return (
  <>
  <div className="card" >
        <img src=".." className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{props.obj.username}</h4>
          <h6 className="card-text">
            Venue:{props.obj.venue}
            <br/>
            Ticket Price:{props.obj.TicketCost}
            <br/>
            "Hurry up!!  only {props.obj.Tlimit} remaining"
          </h6>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
  </>
  )
}

export default Card