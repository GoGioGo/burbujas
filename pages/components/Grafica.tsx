import { useEffect, useRef } from 'react';
import { circle, generadorArrayDeterminado, generaPuntosX, generaPuntosY, linePath, printChart, printChart2 } from './functions2'
import { textGra } from './Functions'
import * as d3 from 'd3'
export default function Grafica() {
    let color = ['black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black', 'black']

    let UnaPro = generadorArrayDeterminado(7);
    let TechDifi = generadorArrayDeterminado(7);
    let NoVacc = generadorArrayDeterminado(7)
    let Apoin = generadorArrayDeterminado(7)
    let Limit = generadorArrayDeterminado(7)
    let NotEle = generadorArrayDeterminado(7)
    let Need = generadorArrayDeterminado(7)
    let Dif = generadorArrayDeterminado(7)
    let DifL = generadorArrayDeterminado(7)

    const svgRef2 = useRef<SVGSVGElement | null>(null)
    const svgRef3 = useRef<SVGSVGElement | null>(null)
    function transition() {
        d3.select('button')
            .on('click', () => {
                let UnaPro1 = generadorArrayDeterminado(7);
                let TechDifi1 = generadorArrayDeterminado(7);
                let NoVacc1 = generadorArrayDeterminado(7)
                let Apoin1 = generadorArrayDeterminado(7)
                let Limit1 = generadorArrayDeterminado(7)
                let NotEle1 = generadorArrayDeterminado(7)
                let Need1 = generadorArrayDeterminado(7)
                let Dif1 = generadorArrayDeterminado(7)
                let DifL1 = generadorArrayDeterminado(7)
                printChart2(UnaPro1, TechDifi1, NoVacc1, Apoin1, Limit1, NotEle1, Need1, Dif1, DifL1, 40, 80, 120, 160, 200, 240, 280, 320, 360, svgRef2)
            })
    }

    useEffect(() => {
        //Generando circulos
        circle(svgRef2, 0, 0, [60, 120, 180, 240, 300])

        let UnaProX = generaPuntosX(UnaPro, 40)
        let UnaproY = generaPuntosY(UnaPro, 40)
        linePath(svgRef2, UnaProX, UnaproY, 101, color)
        textGra(svgRef2, 310, 'Unable to provide require document', 40)
        let TechX = generaPuntosX(TechDifi, 80)
        let TechY = generaPuntosY(TechDifi, 80)
        linePath(svgRef2, TechX, TechY, 102, color)
        textGra(svgRef2, 310, 'Technical dificultes with website', 80)

        let NoVaccX = generaPuntosX(NoVacc, 120)
        let NoVaccY = generaPuntosY(NoVacc, 120)
        linePath(svgRef2, NoVaccX, NoVaccY, 103, color)
        textGra(svgRef2, 340, 'No Vaccine appointments', 120)

        let ApoinX = generaPuntosX(Apoin, 160)
        let ApoinY = generaPuntosY(Apoin, 160)
        linePath(svgRef2, ApoinX, ApoinY, 104, color)
        textGra(svgRef2, 340, 'Apointment times did', 160)

        let LimitX = generaPuntosX(Limit, 200)
        let LimitY = generaPuntosY(Limit, 200)
        linePath(svgRef2, LimitX, LimitY, 105, color)
        textGra(svgRef2, 340, 'Limited internet', 200)

        let NeedX = generaPuntosX(Need, 240)
        let NeedY = generaPuntosY(Need, 240)
        linePath(svgRef2, NeedX, NeedY, 106, color)
        textGra(svgRef2, 340, 'Need Childcare', 240)

        let DifX = generaPuntosX(Dif, 280)
        let DifY = generaPuntosY(Dif, 280)
        linePath(svgRef2, DifX, DifY, 107, color)
        textGra(svgRef2, 320, 'Difficulty Traveling', 280)

        let DifLX = generaPuntosX(DifL, 320)
        let DifLY = generaPuntosY(DifL, 320)
        linePath(svgRef2, DifLX, DifLY, 108, color)
        textGra(svgRef2, 310, 'Difficult Leave', 320)

        let NotEleX = generaPuntosX(NotEle, 360)
        let NotEleY = generaPuntosY(NotEle, 360)
        linePath(svgRef2, NotEleX, NotEleY, 109, color)
        textGra(svgRef2, 310, 'Not elegible', 360)

        printChart(UnaPro, TechDifi, NoVacc, Apoin, Limit, NotEle, Need, Dif, DifL, 40, 80, 120, 160, 200, 240, 280, 320, 360, svgRef2)

        d3.selectAll('path')
            .on('mouseover', function (d, i) {
                d3.select(this).attr('opacity', '0.5')
            })
            .on('mouseout', function (d, i) {
                d3.select(this).attr('opacity', '0.3')
            })
    }, [])


    return <div >
        <svg width='800' height='800'>
            <g ref={svgRef2} transform='translate(400, 400)'></g>
        </svg>
        <button onClick={transition}>transicion</button>
    </div>
}