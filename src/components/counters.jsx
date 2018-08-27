import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render () {
        console.log('Counters -  Rendered');
        const {onReset, onDelete, onIncrement, counter} = this.props;
        return (
        <div>
            <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
           {counter.map(counter => 
                    <Counter 
                     counter={counter}
                     onIncrement={onIncrement}
                     onDelete={onDelete} />)}
        </div>);
    }
}

export default Counters;