import { useEffect, useRef } from "react"
import * as d3 from 'd3'

export default function () {
    let svgRef6 = useRef<SVGSVGElement | null>(null)

    function cicle(x:number, y:number, r:number, svgRef:any){
        d3.select(svgRef.current)
        .append('circle')
        .attr('x', x)
        .attr('y', y)
        .attr('r', r)
        .attr('fill', 'black')
    }
    useEffect(()=>{
        cicle(111, 111, 5, svgRef6)
        cicle(161, 161, 15, svgRef6)

    }, [])
    return <div>
        <svg ref={svgRef6} width='600' height='600' />
    </div>
}