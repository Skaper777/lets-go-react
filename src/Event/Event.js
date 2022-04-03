function Event({name, members, children}) {
  return (
    <div>
      <h2>Event '{name}'</h2>
      <p>Members: {members}</p>
      { children }
    </div>
  )        
}

export default Event