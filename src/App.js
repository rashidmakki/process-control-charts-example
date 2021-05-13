import React from "react";
import Example from './components/pchart/pchart';
import {pChart} from "process-control-charts-es6";

export let data1=[];
class App extends React.Component{
  constructor(){
    super();
    this.state={
      data:{}
    }
  }

  componentDidMount(){   
  let data = [2,3,8,1,1,4,1,4,5,1,8,2,4,3,4,1,8,3,7,4];
  let details = pChart(data,50);
  data1=details;
  this.setState({data:details})
  }
  render(){
    const {data}=this.state;
    return (
    <div className="App">
      <Example data={data} />
    </div>
  );
  }
}

export default App;
