import React from 'react';
import ReactDOM from 'react-dom';
import '../style/style.css';

class KDayList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      kdays: [{
        message: 'Example message',
        date: '30/03/2016'
      }, {
        message: 'Example message',
        date: '01/04/2016'
      }, {
        message: 'Example message',
        date: '02/04/2016'
      }, {
        message: 'Example message',
        date: '03/04/2016'
      }, {
        message: 'Example message',
        date: '04/04/2016'
      }, {
        message: 'Example message',
        date: '05/04/2016'
      }, {
        message: 'Example message',
        date: '06/04/2016'
      }, {
        message: 'Example message',
        date: '07/04/2016'
      }, {
        message: 'Example message',
        date: '08/04/2016'
      }, {
        message: 'Example message',
        date: '09/04/2016'
      },
      ]
    };
  }

  render() {
    const kdays = this.state.kdays.map(kday => (
      <span key={ kday.date }>
        <p style={{ position: 'relative', float: 'left'}}> { kday.message } </p>
        <p style={{ position: 'relative', float: 'left'}}> { kday.date } </p>
      </span>
    ));
    return (
      <div> {kdays} </div>
    );
  }
};

ReactDOM.render(
  (<div>
    <KDayList/>
  </div>),
  document.getElementById('app')
);
