
import React from "react";

class Counter extends React.Component{
   
    render() {
        return (
            
           <section>

                <h1>Counter  {this.props.number}</h1>

                <article>

                    <button className="red" onClick={this.props.substract}>-</button>

                    <h2>{this.props.count}</h2>

                    <button onClick={this.props.increment}>+</button>
                    
                </article>

           </section>
        );
      }
}

export default Counter