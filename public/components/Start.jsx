import React from 'react'

// This component also contains the Reset button

var initialSecs = 60;
var interval;

var Start = React.createClass({
    timer : function (){

    var initialMins = this.props.last;
    var secs = this.props.secs;

    if(initialSecs === 60){
    initialMins -= 1

    this.props.setTime({minutes: initialMins, last:initialMins});

    if (initialMins < 10) { //bug
this.props.setTime({minutes:'0' + initialMins})
}
    }
    if ((initialSecs <= 60)&&(initialSecs >= 10)) {
    this.props.setTime({seconds: initialSecs});
    initialSecs -=1;
    this.props.setTime({seconds: initialSecs});
}
if (initialSecs < 10){
this.props.setTime({seconds: "0"+initialSecs});
initialSecs -= 1;
}
if (initialSecs < 0){
this.props.setTime({seconds: "00"});
initialSecs = 60;

}
      if (initialMins === 0){
		if (initialSecs === 60){
		clearInterval(interval)
    this.props.setTime({disabled: false, startdis:true})
}
}

},

 start: function () {

if (this.props.start === false){
interval = setInterval(this.timer,1000);
this.props.setTime({button: 'Stop', disabled: true, start:true, subdis: true, adddis: true})

} else {
clearInterval(interval)
  if(this.props.last == 0){
    this.props.setTime({button: 'Start', disabled: false, start:false, subdis: true, adddis: false})
  } else {

this.props.setTime({button: 'Start', disabled: false, start:false, subdis: false, adddis: false})
  }
}
},

reset : function (event){
var initialMins = this.props.newMin;
this.props.setTime({seconds: '00'})
initialSecs=60;

if ((initialMins < 10) ){
  this.props.setTime({minutes: '0'+initialMins, last:initialMins, startdis: false, adddis:false, subdis:false, start:false, button:'Start'});

    if (initialMins === 1){
  this.props.setTime({minutes: '0'+initialMins, last:initialMins, startdis: false, adddis:false, subdis:true, start:false, button:'Start'});


} } else{
this.props.setTime({minutes: initialMins, last:initialMins, startdis: false, adddis:false, subdis:false});
}
},

  render : function(){
    return(
      <div className='bottom'>
        <button ref="startbtn" disabled={this.props.startdis} onClick={this.start}>{this.props.btn}</button>
            <button ref="reset" onClick={this.reset} disabled={this.props.disabled}>Reset</button>
       </div>
    )
  }
});

export default Start
