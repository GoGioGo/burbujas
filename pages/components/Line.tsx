import { useRef } from "react";
import { Fragment, useEffect } from "react";
import * as d3 from 'd3'
import { circle, lineP, linePath, lineL } from './functions2'
import { data } from './Interfaces'
//const [data, setata] = useState(initialState)
export default function Line() {
    let z: data[] = [
        {
            x: [15, 90, 128, 165, 240, 195, 210, 128, 45, 60, 15],
            y: [72, 72, 9, 72, 72, 135, 198, 162, 198, 113, 72]
        },
        {
            x: [30, 200, 140, 30],
            y: [140, 190, 20, 140]
        }]
    let x = [15, 90, 128, 165, 240, 195, 210, 128, 45, 60, 15]
    let y = [72, 72, 9, 72, 72, 135, 198, 162, 198, 113, 72]

    let x2 = [30, 200, 140, 30]
    let y2 = [140, 190, 20, 140]
    let dataC = [60, 100]
    const svgRef = useRef<SVGSVGElement | null>(null)


    useEffect(() => {
        let color=['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black']
      
        circle(svgRef, 130, 120, dataC)
        linePath(svgRef, x2, y2, 1, color)
        linePath(svgRef, x, y, 2, color)

        lineL(svgRef, 128, 9, 128, 240)
        lineL(svgRef, 5, 120, 240, 120)
       
        d3.selectAll('path')
            .on('mouseover', function (d, i) {
                d3.select(this).attr('opacity', '0.7')
            })
            .on('mouseout', function(d, i){
                d3.select(this).attr('opacity', '0.4')
            })

    }, [])
    return <Fragment>
        <svg ref={svgRef} width={'100%'} height={400}>
        </svg>
    </Fragment>
}