import React from 'react'

var Timer = React.createClass({

  render: function(){
    return(
      <div className='timer'>
        <div className='mins'>{this.props.mins}</div>:<div className='secs'>{this.props.secs}</div>
        </div>
    )
  }
});

export default Timer
