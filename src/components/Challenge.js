import React, { Component } from 'react';

class Challenge extends Component {

    state = { 
        counter1: 
            {
                id: 1, value: 0, complete: false
            },
        counter2:
            {
                id: 1, value: 0 , complete: false
            },
            error: "",
            count: 0
     };

    componentWillMount() {
        this.HandleRecursion();
    }

    HandleRecursion = () => {
            console.log('Prev count',this.state.count);
            this.setState({count: this.state.count + 1});
            const timer = setTimeout(() => {this.HandleRecursion(  )}, 2000);
            

            setTimeout(() => {
                console.log('Present count',this.state.count);
                if (this.state.count === 6){
                    clearTimeout(timer);
                }
            },1000);

            console.log('Hellow World!')
    }

    HandleValidationIfZero =  (value) => {
        console.log('Zero', value, value == 0);
        return (value == 0)? true: false;
    }

    HandleValidationIfEmpty =  (value) => {
        console.log('Empty', value, value === '');
        return (value === '');
    }

    HandleTimeOut = () => {
            this.setState({error: 'You need to Increase at least 1 input!'});
            setTimeout(() => this.setState({error: ''}), 3000);
    }

    handleSave = () => {
        const {counter1, counter2} = this.state;
        if(
        (this.HandleValidationIfZero(counter1.value) && this.HandleValidationIfZero(counter2.value)) || 
        (this.HandleValidationIfEmpty(counter1.value) && this.HandleValidationIfEmpty(counter2.value)) || 
        (this.HandleValidationIfZero(counter1.value) && this.HandleValidationIfEmpty(counter2.value)) || 
        (this.HandleValidationIfEmpty(counter1.value) && this.HandleValidationIfZero(counter2.value))
        )
        
        {
            console.log('counter1', counter1.value, 'counter2', counter2.value);
            
            this.HandleTimeOut();
            // alert('You need to Increase at least 1 input!');
        }else
        {
            console.log('counter1', counter1.value, 'counter2', counter2.value);
            counter2.complete = true;
            counter1.complete = true;
            console.log('Saved');

            this.setState( 
                {
                    counter1: counter1,
                    counter2: counter2,
                }
            );    
        }
    }

    HandleUserInput = (e) => {
        const {counter1, counter2} = this.state;
        let {value} = e.target, 
        a = (value < 0) ? '' : value,
        b = (((counter1.value  < counter2.value) && (counter2.value > 0))) ? true : false;
        console.log(a,b);
        this.setState( {counter1: {value: a}})
    }

    HandleUserInput2 = (e) => {
        const {counter1, counter2} = this.state;
        let {value} = e.target, 
        a = (value < 0) ? '' : value,
        b = (((counter2.value < counter1.value) && (counter1.value > 0))) ? true : false;
        console.log(a,b);
        this.setState( {counter2: {value: a}})
    }

    render () {
        const {counter1, counter2} = this.state; 
    return (
        <div className="justify-content-align-center">
            <input min='0' 
                value={counter1.value} 
                onChange={ (e) => {this.HandleUserInput(e)}}
                type="number" 
                disabled={(((counter1.value  < counter2.value) && (counter2.value > 0)) || (counter1.complete === true)) ? true : false}
            /> 

            <input min = '0' 
                value={this.state.counter2.value} 
                onChange={ (e) => {this.HandleUserInput2(e)}}
                type="number" 
                disabled={(((counter2.value  < counter1.value) && (counter1.value > 0)) || (counter2.complete === true))}
            />     
            <p>
                <text style={{color: 'white', backgroundColor: 'red'}}>{this.state.error}</text>
            </p>
            <p>
                <button disabled={counter1.complete === true} onClick={()=>this.handleSave()}>{this.state.counter1.complete ? 'Saved' : 'Save'}</button>
            </p>
        </div>
    );
  }
}

export default Challenge;