import React from "react";

class FormField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInput: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitFunction = event => {
    this.props.addItem(event, this.state.itemInput);
    this.setState({ itemInput: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitFunction}>
          <input
            type="text"
            placeholder="enter item"
            name="itemInput"
            value={this.state.itemInput}
            onChange={this.handleChange}
          />
          <button className="add-btn">ADD</button>
        </form>
      </>
    );
  }
}

export default FormField;
