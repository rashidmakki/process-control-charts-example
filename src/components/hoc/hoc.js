import React from "react";
import Example from '../example/example';
import {pChart,npChart,cChart,uChart} from "process-control-charts-es6";

const withComponent=(props)=>(WrappedComponent)=>{
  return class chartExample extends React.Component {
    constructor(props){
      super(props);
      this.state={
        data:{}
      }
    }
    componentDidUpdate(prevProps,prevState){
      if(prevProps.selectedChart===this.props.selectedChart ||prevProps.sampleValue===this.props.sampleValue||prevProps.sampleSize===this.props.sampleSize||prevProps.curve===this.props.curve){
        return null;
      }else{
        const {sampleSize,sampleValue,selectedChart}=this.props;
        let dataDetails;
        if(selectedChart==="pChart"){
          dataDetails= pChart(sampleValue,sampleSize);
          return this.setState({data:dataDetails}) 
        }else if(selectedChart==="npChart"){
          dataDetails= npChart(sampleValue,sampleSize);
          return this.setState({data:dataDetails}) 
        }else if(selectedChart==="cChart"){
          dataDetails= cChart(sampleValue);
          return this.setState({data:dataDetails}) 
        }else if(selectedChart==="uChart"){
          dataDetails= uChart(sampleValue,sampleSize);
          console.log(dataDetails)
          return this.setState({data:dataDetails}) 
        }else{
          return null;
        }
      }
    }

    componentDidMount(){
      const {sampleSize,sampleValue,selectedChart}=this.props;
      let dataDetails;
      if(selectedChart==="pChart"){
        dataDetails= pChart(sampleValue,sampleSize);
        return this.setState({data:dataDetails}) 
      }else if(selectedChart==="npChart"){
        dataDetails= npChart(sampleValue,sampleSize);
        return this.setState({data:dataDetails}) 
      }else if(selectedChart==="cChart"){
        dataDetails= cChart(sampleValue);
        return this.setState({data:dataDetails}) 
      }else{
        dataDetails= uChart(sampleValue,sampleSize);
        return this.setState({data:dataDetails}) 
      }
    }
 
  render() {
    const {curve,colorScheme}=this.props;
    return(
      <div>
      <Example data={this.state.data} curve={curve} colorScheme={colorScheme} />
      <WrappedComponent data={this.state.data} {...this.props} />
      </div>
      );
    } 
  }
}
export default withComponent;
