import React from 'react'
import Start from 'Start'

var Sub = React.createClass({
   sub: function (){
var initialMins = this.props.last;
initialMins--
this.props.setTime({minutes: initialMins, last: initialMins, newMin: initialMins})
if(initialMins <10) {
this.props.setTime({minutes: '0'+ initialMins, last: initialMins, newMin: initialMins})
}
if(initialMins<=1){
initialMins = 1
this.props.setTime({minutes: '01', startdis: false, subdis: true})
}
},
  render: function(){
    return(
<div>
    <button ref="sub" onClick={this.sub} disabled={this.props.subdis} >-</button>

  </div>
    )
  }
});

export default Sub
