function Event(props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      marginBottom: '10px',
      display: 'block',
      padding: '10px'
    }}>
      <h2>Event '{props.name}'</h2>
      <p>Members: {props.members}</p>     
      <input type="text" onChange={props.onChangeName} value={props.name} />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )        
}

export default Event