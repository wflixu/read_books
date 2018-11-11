import React, {Component} from 'react';
import Counter from './Counter'

class ControlPanel extends Component {
    constructor(props){
        super(props);
         this.onCounterUpdate = this.onCounterUpdate.bind(this);
         this.initValues =[0,10,20];
         const initSum = this.initValues.reduce((a,b)=>a+b ,0);
         this.state={
             sum:initSum
         }

    }  
    onCounterUpdate(newValue,previousValue){
        const valueChange = newValue -previousValue;
        this.setState({sum:this.state.sum +valueChange});
        console.log('ksjdkfjkl');
        
    }
    render (){
       console.log('enter controlpanel render');
       
        return (
            <div>
                <Counter caption="First" initValue={0}  onUpdate={this.onCounterUpdate}></Counter>    
                <Counter caption="Second" initValue={this.initValues[1]}  onUpdate={this.onCounterUpdate}></Counter>    
                <Counter caption="Third" initValue={this.initValues[2]} onUpdate={this.onCounterUpdate}></Counter> 
                <button onClick={()=>this.forceUpdate()}>
                 click me to repaint
                </button> 
                <hr/>
                <div>total count {this.state.sum}</div>  
            </div>
        )
    }
}

export default ControlPanel