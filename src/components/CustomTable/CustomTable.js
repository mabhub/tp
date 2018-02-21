import React, { Component } from 'react';

class CustomTable extends Component {
  render() {
    return (
      <table style={{margin: '0 auto'}}>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Line 1</th>
            <td>Value 1</td>
          </tr>
          <tr>
            <th>Line 2</th>
            <td>Value 2</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default CustomTable;