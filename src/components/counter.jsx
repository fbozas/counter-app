import React, { Component } from 'react';

class Counter extends Component {
    state = {  
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    } 

    styles = {
        fontSize: 10,
        fontWeight: "bold"
    }

    handleIncrement(){
        console.log("Increment Clicked!");
    }
    
    render() { 
        return (
           <div>
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