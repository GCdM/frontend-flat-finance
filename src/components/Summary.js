import React from 'react'

const Summary = ({ household, members }) => {

  const list = members.map( info => <div className="column">{info}</div> )

  return (
    <div className="column">
      <div className="row">
        <h1 className="household">{household.name}</h1>
        <span><i>(Household ID: {household.id} )</i></span>
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
