import React, { Component ,useEffect, useState  } from 'react';
import axios from 'axios';
import '../Styles.css';


export default class Table extends Component {
  
      constructor(props) {
        super(props);
        this.state = {
          headings: [],
          body:[]
        };
        this.DisplayData='';
        
      }
  
      componentDidMount() {
        axios.get('https://0mzpd979fi.execute-api.us-west-2.amazonaws.com/items', { headers: {} })
          .then(res => {
            const tableData = res.data;
            console.log(tableData);
            const firstRecord = tableData[0]
            const firstRecordKeys =  Object.keys(firstRecord[0]);
            console.log(firstRecordKeys);
            const DisplayData= tableData.map(
              (info)=>{
                console.log(info[0].id)
                  return(
                      <tr>
                          <td>{info[0].id}</td>
                          <td>{info[0].firstName}</td>
                          <td>{info[0].lastName}</td>
                          <td>{info[0].message}</td>
                      </tr>
                  )
              }
          ) 

            this.setState({
              headings: firstRecordKeys,
              body: DisplayData
            });
          })
      }

       JsonDataDisplay(){
        console.log(this.state.body);
        
      }
  
    render() {
      return (
        <div>
         <table className="table table-striped">
        <thead>
            <tr>
            {this.state.headings.map((head) => <th key={head}> {head}</th>)}
            </tr>
        </thead>
        <tbody>
{this.state.body}
        </tbody>
    </table>
        </div>
      );
    }
}