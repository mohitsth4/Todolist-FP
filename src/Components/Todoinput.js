import React, { Component } from "react";

class Todoinput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 text-center mx-auto mb-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control my-3 text-center"
            value={item}
            onChange={handleChange}
          />
          <button type="submit" className={
						editItem ? 
						"btn btn-success"
						:
						"btn btn-primary"
					}>
					{editItem ? "Edit Todo" : "Add Todo"}
					</button>
        </form>
      </div>
    );
  }
}

export default Todoinput;
