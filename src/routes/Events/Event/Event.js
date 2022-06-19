import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"
import Loader from '../../../components/Ui/Loader/Loader';

function EventPage() {  
  const {id} = useParams()
  const [event, setEvent] = useState({})
  const [loading, setLoading] = useState(true)  

  useEffect(() => {
    async function getEvent() {
      try {
        const res = await axios.get(`https://letsgo-react-default-rtdb.europe-west1.firebasedatabase.app/events/${id}.json/`)
        setEvent({...res.data})
        setLoading(false)   
      } catch (error) {
        console.error(error)
      }
    }

    getEvent()
  }, [id])

  return (
    <div className="container">
      <h1>Event page {event ? event.title : ''}</h1>

      { loading 
        ? <Loader/> 
        : <div>

          </div>
      }
    </div>
  )  
}

export default EventPage