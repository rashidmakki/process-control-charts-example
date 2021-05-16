import React from "react";
import Form from './components/form/form';
import PChart from './components/pchart/pchart';
import NpChart from './components/npchart/npchart';
import CChart from './components/cchart/cchart';
import UChart from './components/uchart/uchart';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        sampleValue:[],
        sampleSize:null,
        selectedChart:'',
        curve:"",
        colorScheme:"",
        showChart:false
    }
  }

  onChange=(event)=>{
    let {name,value}=event.target;
    if(name==="sampleValue"){
      let array=[];
      value.split(",").map(item=> array.push(Number(item)));
     return this.setState({sampleValue:array});
    }else if(name==="sampleSize"){
       let size=Number(value);
     return this.setState({sampleSize:size});
    }
       this.setState({[name]:value});
  }

  handleSubmit=(event)=>{
    this.setState({showChart:true})
  }

  render(){
    let {selectedChart,showChart}=this.state;
    return (
    <div className="App">
      <Form onChange={this.onChange} handleSubmit={this.handleSubmit}/>
      {
       (showChart)?
         (selectedChart==="pChart")?
          <PChart {...this.state} />:
             (selectedChart==="npChart")?
             <NpChart {...this.state} />:
               (selectedChart==="cChart")?
                 <CChart {...this.state} />:
                  (selectedChart==="uChart")?
                   <UChart {...this.state} />:
                     <h1> No Chart is selected </h1>
          :
          null
      }  
    </div>
  );
  }
}

export default App;
