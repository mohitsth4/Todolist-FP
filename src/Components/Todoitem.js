import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class Todoitem extends Component {
  render() {
    const { title, handelDelete, handelEdit } = this.props;

    return (      
			<tr>
        <td width="10%">
          <input type="checkbox" name="checktodo" />
        </td>
        <td width="70%">
          <p>{title}</p>
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
