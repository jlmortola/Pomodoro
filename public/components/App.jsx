import React from 'react'
import Start from 'Start'
import Add from 'Add'
import Sub from 'Sub'
import Timer from 'Timer'

var App = React.createClass({
  getInitialState: function() {
    return {
      minutes: 25,
      seconds: '00',
      button: "Start",
      last: 25,
      disabled: false,
      start: false,
      startdis: false,
      subdis: false,
      adddis: false,
      newMin: 25,
           }
  },

  setTime : function(updates){
    this.setState(updates)
  },

  render: function(){
    var secs = this.state.seconds;
    var mins = this.state.minutes;
    var btn = this.state.button;
    var last = this.state.last;
    var newMin = this.state.newMin;
    var disabled = this.state.disabled; // reset button disable
    var start = this.state.start; // start button to stop
    var startdis = this.state.startdis; // start button disable
    var subdis = this.state.subdis; // button sub state disable
    var adddis = this.state.adddis; // button add state disable
    return(

     <div className='all'>
        <h1 className='header'> React.js Pomodoro Clock </h1>
        <div className="display"><Sub last={last} disabled={disabled}setTime={this.setTime} startdis={startdis} subdis={subdis} newMin={newMin} adddis={adddis}/>

     <div className='numbers'><Timer secs={secs} mins={mins} last={last} setTime={this.setTime}/> </div>
             <Add last={last} disabled={disabled}setTime={this.setTime} newMin={newMin} adddis={adddis}/></div>
        <div className='bottom'>
     <Start  disabled={disabled} secs={secs} mins={mins} btn={btn} last={last} startdis={startdis} setTime={this.setTime} start={start} newMin={newMin} adddis={adddis} subdis={subdis}/>

</div>
        <h3 className='footer'> Created by Jose Luis Mortola</h3>
        </div>

    )
  }
});

export default App
