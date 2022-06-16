import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function EventPage(props) {  
  let {id} = useParams()

  return (
    <div className="container">
      <h1>Event page {id}</h1>
    </div>
  )  
}

export default EventPage