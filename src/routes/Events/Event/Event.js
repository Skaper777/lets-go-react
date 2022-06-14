import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function EventPage(props) {  
  let {id} = useParams()

  return <h1>Event page {id}</h1>
}

export default EventPage