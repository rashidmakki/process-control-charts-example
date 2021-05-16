import React from "react";
import withComponent from "../hoc/hoc";

const TableData=(props)=>{
	const {x,y}=props;
	return(
              <tr>
              <td> <h5> {x} </h5></td>
              <td> <h5> {y} </h5></td>
              </tr>
	   );
}

const NpChart=(props)=>{
	const {data,selectedChart}=props;
	const sampleData=data.sampleData;
	return(
         <div className="container">
         <h1 align="center" className="display-4 mt-3 mb-5">{selectedChart}</h1>

         <div className="row">

          <div className="col-md-3">
          <div className="card border-dark mb-3 " >
          <div className="card-body text-dark text-center">
          <h5 className="card-title">Upper Control Limit</h5>
          <p className="card-text text-center"> {data.ucl}</p>
          </div>
          </div>
          </div>

          <div className="col-md-3">
          <div className="card border-dark mb-3 " >
          <div className="card-body text-dark text-center">
          <h5 className="card-title">Control Limit</h5>
          <p className="card-text text-center">{data.cl}</p>
          </div>
          </div>
          </div>

          <div className="col-md-3">
          <div className="card border-dark mb-3 " >
          <div className="card-body text-dark text-center">
          <h5 className="card-title">Lower Control Limit </h5>
          <p className="card-text">{data.lcl}</p>
          </div>    
          </div>
          </div>

          <div className="col-md-3">
          <div className="card border-dark mb-3 " >
          <div className="card-body text-dark text-center">
          <h5 className="card-title">Sample Out Of Control</h5>
          <p className="card-text text-center">{data.samplesOutOfControl}</p>
          </div>
          </div>  
          </div>        
          
          <table className="table table-striped table-hover mt-3">
          <thead className="table-dark">
          <tr>
          <th>
          <h5>Sample Number</h5>
          </th>
          <th>
           <h5> Pi </h5>
          </th>
          </tr>
          </thead>
          <tbody>
          {
          	(sampleData===[]||sampleData===undefined) ? <tr> <td><h4> No Data Present </h4></td></tr> :
          	 sampleData.map(({x,y},index)=>(
             <TableData key={index} x={x} y={y} />
          	 	))       
          }
          </tbody>
          </table>
                

          </div>
         </div>
		);
}

export default withComponent()(NpChart);