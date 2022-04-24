import { ClickedContext } from "../App"

export default props => {
    return (
        <div style={{border: '2px solid blue'}}>
            <h3>Counter 2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>            
        </div>
    )
}