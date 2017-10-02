import React, { Component } from 'react';



export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    //binds local this with global this
  }// constructor to initialize local component state

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }// onchange event, change state.term

  onFormSubmit(event){
    event.preventDefault(); //don't submit by default
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form> //form has its advantages
    );
  }
}
