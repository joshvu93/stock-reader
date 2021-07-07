import React from 'react';

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const API_KEY = '7SDGXMYCIKSH0SN7';
    let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=TSLA&outputsize=compact&apikey=${API_KEY}`;

    fetch(API_CALL)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          console.log(data)
        }
      )
  }

  render() {
    return ( 
    <div>
      <h1> Stock Market </h1> 
      </div>
    )
  }
}

export default Stock;