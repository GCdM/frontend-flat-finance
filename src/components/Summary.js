import React from 'react'

//Should receive props: title, info
const Summary = (props) => {

  const list = props.members.map( info => <div className="col">{info}</div> )

  return (
    <React.Fragment>
      <hr></hr>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div className="row">
        {list}
      </div>
      <hr></hr>
    </React.Fragment>
  )
}

export default Summary
