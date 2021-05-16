import React from "react";

const Form=({onChange,handleSubmit})=>{
		return(
		   <div className="container mb-3">
		   <h1 align="center" className="display-3 mt-3"> Process Control Chart </h1>
           <div className="row mt-3"  style={{"height":"330px"}}>
           <div className="col-12">
			<div className="form-floating mb-3">
			<input type="text" className="form-control" placeholder="10,12,15,20,34,36,5,8,17,10"  name="sampleValue" onChange={onChange} />
			<label htmlFor="floatingInput">Email Value Of The Sample</label>
			</div>
            </div>

            <div className="col-md-6">
			<div className="form-floating mb-3">
			<input type="text" className="form-control"  placeholder="50"  name="sampleSize" onChange={onChange} />
			<label htmlFor="floatingInput">Sample Size</label>
			</div>
            </div>

            <div className="col-md-6">
			<select name="selectedChart" onChange={onChange} className="form-select " style={{"height":"60%"}} aria-label="Default select example">
			<option defaultValue="Select the chart" >Select the chart</option>
			<option value="pChart">pChart</option>
			<option value="npChart">npChart</option>
			<option value="cChart">cChart</option>
			<option value="uChart">uChart</option>
			</select>
			</div>

			<div className="col-md-6 mb-3">
			<select name="curve" onChange={onChange} className="form-select h-75 " aria-label="Default select example">
			<option defaultValue="Select the chart" >Select any curve </option>
			<option value="basis">basis</option>
			<option value="cardinal">cardinal</option>
			<option value="catmullRom">catmullRom</option>
			<option value="linear">linear</option>
			<option value="monotoneX">monotoneX</option>
			<option value="monotoneY">monotoneY</option>
			<option value="natural">natural</option>
			<option value="step">step</option>
			<option value="stepAfter">stepAfter</option>
			<option value="stepBefore">stepBefore</option>
			</select>
			</div>
            
            <div className="col-md-6 mb-3">
			<select name="colorScheme" onChange={onChange} className="form-select h-75 " aria-label="Default select example">
			<option defaultValue="Select the chart" >Select any color scheme </option>
			<option value="nivo">nivo</option>
			<option value="category10">category10</option>
			<option value="accent">accent</option>
			<option value="dark2">dark2</option>
			<option value="paired">paired</option>
			<option value="set1">set1</option>
			<option value="set2">set2</option>
			<option value="set3">set3</option>
			</select>
			</div>


            <div className="d-grid">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
            Submit
            </button>
            </div>

			</div>
			</div>
			);
}

export default Form;