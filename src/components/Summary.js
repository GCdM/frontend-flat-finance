import React from 'react'

//Should receive props: title, info
const Summary = (props) => {

  const list = props.members.map( info => <div className="column">{info}</div> )

  return (
    <div className="column">
      <hr></hr>
      <div className="row">
        <h2>{props.title}</h2>
      </div>
      <br></br>
      <div className="ui equal width grid">
        {list}
      </div>
      <hr></hr>
    </div>
  )
}

export default Summary
