import React, { Component } from 'react';

class Counter extends Component {
    state = {  
       count: this.props.value
    } 

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    handleIncrement = () => {
        this.setState({count: this.state.count+1});
    }

    render() { 
        console.log(this.props);
        return (
           <div>
                <span className={this.getBadgesClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
           </div>
        );
    }

    renderTags(){
        if (this.state.tags.length == 0) 
            return <p>There are no tags!</p>
        return this.state.tags.map(tag => <li key={tag}>{tag}</li>)
    }

    getBadgesClasses(){
        let classes = "badge m-2 badge-";
        classes += (this.state.count == 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return (count === 0) ? 'Zero' : count;
    }
}
 
export default Counter;