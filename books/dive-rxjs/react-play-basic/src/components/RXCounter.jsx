import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';


export class RXCounter extends Component {
    constructor() {
        super(...arguments);
        this.state = { count: 0 };
        this.counter = new Subject();
        const observer = value => this.setState({count:value});
        this.counter.pipe(
            scan((result,inc)=> result+inc ,0)
        )
        .subscribe(observer);
    }
    render(){
        return (
            <div>
                <button onClick={() => this.counter.next(-1)}>-</button>
                <span>{this.state.count}</span>
                
                <button onClick={() => this.counter.next(1)}>+</button>
            </div>
        )
    }
}