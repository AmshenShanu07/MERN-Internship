import './Tile.css'

function Tile (props) {
  return (
    <div className="list_container">
        <div className="list_body">
          <div className="list_actions">
            <input type="checkbox" name="" className="done_checkbox" />
            <p>{props.task}</p>
          </div>
          <button className="delete_button" onClick={props.onDelete} >Delete</button>
        </div>
      </div>
  )
}

export default Tile;