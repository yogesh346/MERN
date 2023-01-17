//<td> table data  <tr> table row
    import React from "react";
  
    import data from './data.json';
    import "./Useref1.css"
    
    export default function State1() {
      return (
        <>
          <div class="container">
            <div class="side">
              {data.map((item) => {
                return (
                  <table>
                    <tbody>
                      <tr>                       
                        <td>{item.id}</td>      
                        <td>{item.name}</td>
                        <td>{item.title}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
              
            </div>
            <div class="content">
              {data.map((item) => {
                return (
                  <table>
                    <tbody>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.parent}</td>
                        <td>{item.title}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
              <br />
            </div>
          </div>
        </>
      );
    }
