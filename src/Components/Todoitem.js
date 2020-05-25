import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class Todoitem extends Component {
  state={
    check: false,
    strike: 'none'
  }

  onCheck(item){
    this.setState({check: !this.state.check})
    if (this.state.strike === 'none'){
      this.setState({strike: 'line-through'})
    } else {
      this.setState({strike: 'none'})
    }
  }

  render() {
    const { item, title, handelDelete, handelEdit } = this.props;
    const strike = {
      textDecoration: this.state.strike,
    }
    return (      
			<tr>
        <td width="10%">
          <input 
            type="checkbox" 
            name="checktodo" 
            checked={this.state.check}
            onChange={() => this.onCheck(item)}
          />
        </td>
        <td width="70%">
          <p style= {strike}>{title}</p>
        </td>
        <td width="10%" className="text-right text-success" onClick={handelEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </td>
        <td width="10%" className="text-danger" onClick={handelDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </td>
      </tr>
    );
  }
}

export default Todoitem;
