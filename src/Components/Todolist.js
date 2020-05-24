import React, { Component } from "react";
import Todoitem from "./Todoitem";

class Todolist extends Component {
  render() {
    const { items, clearList, handelDelete, handelEdit } = this.props;
    return (
      <div className="row">
        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <table className="table-striped table">
            <thead>
              <tr>
                <th></th>
                <th>ToDo Name</th>
                <th colSpan="2" className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => {
								return <Todoitem key={item.id} title={item.title} 
								handelDelete={() => handelDelete(item.id)}
								handelEdit={() => handelEdit(item.id)} />;
              })}
              <tr>
                <td colSpan="4">
                  <button type="button" className="btn btn-danger" onClick={clearList}>Clear Todo</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Todolist;
