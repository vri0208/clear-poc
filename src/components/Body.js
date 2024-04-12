import React, { Component } from 'react';
import axios from 'axios';
import '../Styles.css';


export default class Body extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id : '',
        firstName: '',
        lastName: '',
        message: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    //const uniqueId = parseInt(Date.now() * Math.random()); 
     uniqueId  =10;

  
    handleChange(event) {
      const inputValue = event.target.value;
      const stateField = event.target.name;
      this.setState({
        [stateField]: inputValue,
      });
      console.log(this.state);
    }
    async handleSubmit(event) {
      event.preventDefault();
      //const uniqueId  =10;
      const { id,firstName,lastName,message } = this.state;
      await axios.put(
        'https://0mzpd979fi.execute-api.us-west-2.amazonaws.com/items',
        { key1: `${id},${firstName},${lastName}, ${message}` }
      );
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
          <input  type="hidden" name="id" value={this.uniqueId}></input>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName}
            />

           <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName}
            />

            <label>Message:</label>
            <input
              type="text"
              name="message"
              onChange={this.handleChange}
              value={this.state.message}
            />
  
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    }
}