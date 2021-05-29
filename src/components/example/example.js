import React from 'react';
import { ResponsiveLine } from '@nivo/line';
import "./example.css";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const styleById = {
    "Upper Control Limit": {
        strokeDasharray: '12, 6',
        strokeWidth: 2,
    },
    "Lower Control Limit":{
        strokeDasharray: '12, 6',
        strokeWidth: 2,
    },
    "Control Limit":{
        strokeDasharray: '12, 6',
        strokeWidth: 2,
    },
    default: {
        strokeWidth: 1,
    },
}
const DashedLine = ({ series, lineGenerator, xScale, yScale }) => {
    return series.map(({ id, data, color }) => (
        <path
            key={id}
            d={lineGenerator(
                data.map(d => ({
                    x: xScale(d.data.x),
                    y: yScale(d.data.y),
                }))
            )}
            fill="none"
            stroke={color}
            style={styleById[id] || styleById.default}
        />
    ))
}
const Example = ({ data,curve,colorScheme}) =>{
   return(
      <div className="example"> 
    <ResponsiveLine

         data={[   
                {"id":"Lower Control Limit","color":"yellow",data:data.lclPlot},
                {"id":"Upper Control Limit","color":"red",data:data.uclPlot},
                {"id":"Control Limit","color":"green",data:data.clPlot},
                {"id":"Sample fraction nonconforming","color":"orange",data:data.sampleData}
               ]}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point', min: 0, max: 'auto' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        yFormat=">-.2f"
        curve={curve}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Sample Number',
            legendOffset: 38,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Sample fraction nonconforming',
            legendOffset: -45,
            legendPosition: 'middle'
        }}
        colors={{"scheme":colorScheme}}
        pointSize={4}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        layers={['grid', 'markers', 'axes',DashedLine ,'areas' ,'crosshair', 'points', 'slices', 'mesh', 'legends']}
        legends={[
            {
                anchor: 'right',
                direction: 'column',
                justify: false,
                translateX: 83,
                translateY: 8,
                itemsSpacing:70,
                itemDirection: 'top-to-bottom',
                itemWidth: 56,
                itemHeight: 38,
                itemOpacity: 0.75,
                symbolSize: 15,
                symbolShape: 'diamond',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    
        
    />

    </div>
);
}
export default Example;