import React from 'react'
import Start from 'Start'

var Add = React.createClass({
add: function (){
var initialMins = this.props.last;
initialMins++
this.props.setTime({minutes: initialMins, last: initialMins, startdis: false, subdis:false, newMin: initialMins});
if (initialMins ==60){
initialMins = 0;
}
if(initialMins <10) {
this.props.setTime({minutes: '0'+ initialMins, last: initialMins, newMin: initialMins})

}
},
  render: function(){
    return(
    <button ref="add" onClick={this.add} disabled={this.props.adddis}>+</button>
    )
  }
});

export default Add
