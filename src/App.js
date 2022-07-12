import React from "react";
import Counter from "./components/Counter";
import './styles/globale.css'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      count : 0,
      count2 : 50,
    }
  }
  
  handleClickPlus = () =>{
    const nowCountPlus = this.state.count + 1
    if(this.state.count!==100){
      if (this.state.count===this.state.count2){
        this.setState({
        count: nowCountPlus,
        count2: nowCountPlus
        }) 
      }else{
        this.setState({
        count: nowCountPlus
        }) 
      }
    }
  }
 
  handleClickPlus2 = () =>{
    const nowCountPlus = this.state.count2 + 1
    if (this.state.count2 !== 100){
      this.setState({
      count2: nowCountPlus
    }) 
    }
  }


  handleClickMoins = () =>{
    const nowCountMoins = this.state.count -1
    if(this.state.count -1 >= 0){
      
    this.setState({
      count: nowCountMoins
    }) 
    }
  }

  handleClickMoins2 = () =>{
    const nowCountMoins = this.state.count2 -1
    if(this.state.count2 -1 >= 0){
      if (this.state.count===this.state.count2){
        this.setState({
          count: nowCountMoins,
          count2: nowCountMoins
        }) 
      }else{
        this.setState({
          count2: nowCountMoins
        })
      }
    }
  }

  render() {
    return (
       <>
        <Counter count={this.state.count} increment={this.handleClickPlus}   substract={this.handleClickMoins} number={1}/>
        <Counter count={this.state.count2} increment={this.handleClickPlus2}  substract={this.handleClickMoins2} number={2}/>
       </>
    );
  }
}


export default App;
