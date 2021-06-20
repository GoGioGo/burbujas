import { useRef } from "react";
import * as d3 from 'd3'
import { data } from './Interfaces'

export function graficaUncirculo(x:number, y:number, r:number, svgRef:any){
    d3.select(svgRef.current)
    .append('circle')
    .attr('x', x)
    .attr('y', y)
    .attr('r', r)
    .attr('fill', 'black')
    //.attr('class', 'asd' + i+j)

}
export function generaPuntosY(array: number[], grados: number): number[] {
    let puntosY = [0]
    for (let i = 0; i < array.length; i++) {
        if (grados < 180)
            puntosY[i] = Math.abs(obtY(array[i], grados))
        else
            puntosY[i] = -Math.abs(obtY(array[i], grados))
    }
    return puntosY
}
export function obtY(x: number, grados: number): number {
    let m = Math.tan(grados * Math.PI / 180)
    let z = x * Math.abs(m) / Math.sqrt(1 + Math.pow(m, 2))
    return z
}
export function generaPuntosX(array: number[], grados: number): number[] {
    let puntosX = [0]
    for (let i = 0; i < array.length; i++) {
        if (grados < 90 || grados > 270)
            puntosX[i] = Math.abs(obtX(array[i], grados))
        else
            puntosX[i] = -Math.abs(obtX(array[i], grados))
    }
    return puntosX
}
export function obtX(x: number, grados: number): number {
    let m = Math.tan(grados * Math.PI / 180)
    let z = x / Math.sqrt(1 + Math.pow(m, 2))
    return z
}
export function maxValueArray(x: number[]): number {
    let h = 0
    for (let i = 0; i < x.length; i++) {
        if (x[i] > h)
            h = x[i];
    }
    return h;
}
export function generadorArray(): number[] {
    let array = [1]
    let length = Math.ceil(Math.random() * 10)
    for (let i = 0; i < length; i++)
        array[i] = Math.ceil(Math.random() * 100)
    return array
}

export function generadorArrayDeterminado(x: number): number[] {
    let array = [1]
    for (let i = 0; i < x; i++)
        array[i] = Math.ceil(Math.random() * 300)
    return array
}
export function lineP(svgRef: any, dat: data[]) {
    const svg3 = d3.select(svgRef.current)
    const myLine = d3.line()
        .x((value: any, index) => value.x[index])
        .x((value: any, index) => value.y[index])
        .curve(d3.curveCardinal)
    svg3.selectAll('path')
        .data([dat])
        .join(
            enter => enter
                .append('path'),
            update => update
                .attr('opacity', '0.8')
        )
        .attr('d', function (d: any) {
            console.log(d)
            return myLine(d)
        })
        .attr('fill', 'pink')
        .attr('stroke', 'red')
        .attr('opacity', '0.4')
}

export function printChart(a1: number[], a2: number[], a3: number[], a4: number[], a5: number[], a6: number[], a7: number[], a8: number[], a9: number[],
    m1: number, m2: number, m3: number, m4: number, m5: number, m6: number, m7: number, m8: number, m9: number, svgRef: any) {
    let x = [0];
    let y = [0];
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 9; j++) {
            switch (j) {
                case 0:
                    if (m1 < 90 || m1 > 270)
                        x[j] = Math.abs(obtX(a1[i], m1))
                    else
                        x[j] = -Math.abs(obtX(a1[i], m1))
                    if (m1 < 180)
                        y[j] = Math.abs(obtY(a1[i], m1))
                    else
                        y[j] = -Math.abs(obtY(a1[i], m1))
                        graficaUncirculo(x[j], y[j], 2, svgRef)
                    break;
                case 1:
                    if (m2 < 90 || m2 > 270)
                        x[j] = Math.abs(obtX(a2[i], m2))
                    else
                        x[j] = -Math.abs(obtX(a2[i], m2))
                    if (m2 < 180)
                        y[j] = Math.abs(obtY(a2[i], m2))
                    else
                        y[j] = -Math.abs(obtY(a2[i], m2))
                    break;
                case 2:
                    if (m3 < 90 || m3 > 270)
                        x[j] = Math.abs(obtX(a3[i], m3))
                    else
                        x[j] = -Math.abs(obtX(a3[i], m3))
                    if (m3 < 180)
                        y[j] = Math.abs(obtY(a3[i], m3))
                    else
                        y[j] = -Math.abs(obtY(a3[i], m3))

                    break;
                case 3:
                    if (m4 < 90 || m4 > 270)
                        x[j] = Math.abs(obtX(a4[i], m4))
                    else
                        x[j] = -Math.abs(obtX(a4[i], m4))
                    if (m4 < 180)
                        y[j] = Math.abs(obtY(a4[i], m4))
                    else
                        y[j] = -Math.abs(obtY(a4[i], m4))

                    break;
                case 4:
                    if (m5 < 90 || m5 > 270)
                        x[j] = Math.abs(obtX(a5[i], m5))
                    else
                        x[j] = -Math.abs(obtX(a5[i], m5))
                    if (m5 < 180)
                        y[j] = Math.abs(obtY(a5[i], m5))
                    else
                        y[j] = -Math.abs(obtY(a5[i], m5))

                    break;
                case 5:
                    if (m6 < 90 || m6 > 270)
                        x[j] = Math.abs(obtX(a6[i], m6))
                    else
                        x[j] = -Math.abs(obtX(a6[i], m6))
                    if (m6 < 180)
                        y[j] = Math.abs(obtY(a6[i], m6))
                    else
                        y[j] = -Math.abs(obtY(a6[i], m6))
                    break;
                case 6:
                    if (m7 < 90 || m7 > 270)
                        x[j] = Math.abs(obtX(a7[i], m7))
                    else
                        x[j] = -Math.abs(obtX(a7[i], m7))
                    if (m7 < 180)
                        y[j] = Math.abs(obtY(a7[i], m7))
                    else
                        y[j] = -Math.abs(obtY(a7[i], m7))
                    break;
                case 7:
                    if (m8 < 90 || m8 > 270)
                        x[j] = Math.abs(obtX(a8[i], m8))
                    else
                        x[j] = -Math.abs(obtX(a8[i], m8))
                    if (m8 < 180)
                        y[j] = Math.abs(obtY(a8[i], m8))
                    else
                        y[j] = -Math.abs(obtY(a8[i], m8))
                    break;
                case 8:
                    if (m9 < 90 || m9 > 270)
                        x[j] = Math.abs(obtX(a9[i], m9))
                    else
                        x[j] = -Math.abs(obtX(a9[i], m9))
                    if (m9 < 180)
                        y[j] = Math.abs(obtY(a9[i], m9))
                    else
                        y[j] = -Math.abs(obtY(a9[i], m9))
                    break;
                default:
                    console.log('se salio del switch')
            }
        }
        x[9] = x[0]
        y[9] = y[0]
        linePath(svgRef, x, y, i, ['red', 'pink', 'yelllow', 'blue', 'green', 'orange', 'brown', 'purple', 'gray'])
    }
}

export function printChart2(a1: number[], a2: number[], a3: number[], a4: number[], a5: number[], a6: number[], a7: number[], a8: number[], a9: number[],
    m1: number, m2: number, m3: number, m4: number, m5: number, m6: number, m7: number, m8: number, m9: number, svgRef: any) {
    let x = [0];
    let y = [0];
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 9; j++) {
            switch (j) {
                case 0:
                    if (m1 < 90 || m1 > 270)
                        x[j] = Math.abs(obtX(a1[i], m1))
                    else
                        x[j] = -Math.abs(obtX(a1[i], m1))
                    if (m1 < 180)
                        y[j] = Math.abs(obtY(a1[i], m1))
                    else
                        y[j] = -Math.abs(obtY(a1[i], m1))
                    break;
                case 1:
                    if (m2 < 90 || m2 > 270)
                        x[j] = Math.abs(obtX(a2[i], m2))
                    else
                        x[j] = -Math.abs(obtX(a2[i], m2))
                    if (m2 < 180)
                        y[j] = Math.abs(obtY(a2[i], m2))
                    else
                        y[j] = -Math.abs(obtY(a2[i], m2))
                    break;
                case 2:
                    if (m3 < 90 || m3 > 270)
                        x[j] = Math.abs(obtX(a3[i], m3))
                    else
                        x[j] = -Math.abs(obtX(a3[i], m3))
                    if (m3 < 180)
                        y[j] = Math.abs(obtY(a3[i], m3))
                    else
                        y[j] = -Math.abs(obtY(a3[i], m3))
                    break;
                case 3:
                    if (m4 < 90 || m4 > 270)
                        x[j] = Math.abs(obtX(a4[i], m4))
                    else
                        x[j] = -Math.abs(obtX(a4[i], m4))
                    if (m4 < 180)
                        y[j] = Math.abs(obtY(a4[i], m4))
                    else
                        y[j] = -Math.abs(obtY(a4[i], m4))
                    break;
                case 4:
                    if (m5 < 90 || m5 > 270)
                        x[j] = Math.abs(obtX(a5[i], m5))
                    else
                        x[j] = -Math.abs(obtX(a5[i], m5))
                    if (m5 < 180)
                        y[j] = Math.abs(obtY(a5[i], m5))
                    else
                        y[j] = -Math.abs(obtY(a5[i], m5))
                    break;
                case 5:
                    if (m6 < 90 || m6 > 270)
                        x[j] = Math.abs(obtX(a6[i], m6))
                    else
                        x[j] = -Math.abs(obtX(a6[i], m6))
                    if (m6 < 180)
                        y[j] = Math.abs(obtY(a6[i], m6))
                    else
                        y[j] = -Math.abs(obtY(a6[i], m6))
                    break;
                case 6:
                    if (m7 < 90 || m7 > 270)
                        x[j] = Math.abs(obtX(a7[i], m7))
                    else
                        x[j] = -Math.abs(obtX(a7[i], m7))
                    if (m7 < 180)
                        y[j] = Math.abs(obtY(a7[i], m7))
                    else
                        y[j] = -Math.abs(obtY(a7[i], m7))
                    break;
                case 7:
                    if (m8 < 90 || m8 > 270)
                        x[j] = Math.abs(obtX(a8[i], m8))
                    else
                        x[j] = -Math.abs(obtX(a8[i], m8))
                    if (m8 < 180)
                        y[j] = Math.abs(obtY(a8[i], m8))
                    else
                        y[j] = -Math.abs(obtY(a8[i], m8))
                    break;
                case 8:
                    if (m9 < 90 || m9 > 270)
                        x[j] = Math.abs(obtX(a9[i], m9))
                    else
                        x[j] = -Math.abs(obtX(a9[i], m9))
                    if (m9 < 180)
                        y[j] = Math.abs(obtY(a9[i], m9))
                    else
                        y[j] = -Math.abs(obtY(a9[i], m9))
                    break;
                default:
                    console.log('se salio del switch')
            }
        }
        x[9] = x[0]
        y[9] = y[0]
        transitionLinePath(svgRef, x, y, i)
    }
}

export function linePath(svgRef: any, x: number[], y: number[], id: number, color: string[]) {
    const svg3 = d3.select(svgRef.current)
    const myLine3 = d3.line()
        .x((value, index) => x[index])
        .y((value: any) => value)
        .curve(d3.curveCardinal)
    var f=svg3
        .selectAll('path')
        .filter('asd' + id)
        .data([y]);
    f
        .join(
            enter => enter
                .append('path'),
            update => update
                
                .attr('opacity', '0.4')
        )
        
        .attr('d', function (d: any, i) {
            return myLine3(d)
        })
        .attr('fill', function (d, i) {
            return color[id]
        })
        .attr('stroke', 'black')
        .attr('class', 'asd' + id)
        .attr('opacity', '0.3')
        .style('stroke-opacity', '1')
}
export function transitionLinePath(svgRef: any, x: number[], y: number[], id: number) {
    console.log('entro')

    const svg3 = d3.select(svgRef.current)
    const myLine = d3.line()
        .x((value, index) => x[index])
        .y((value: any) => value)
        .curve(d3.curveCardinal)
    svg3
        .selectAll('path')
        .filter('asd' + id)
        .transition()
        .duration(2000)
        .attr('d', function (d: any, i) {
            return myLine(d)
        })
    console.log('salio')
}
export function lineL(svgRef: any, x1: number, y1: number, x2: number, y2: number) {
    d3.select(svgRef.current)
        .append('line')
        .attr('x1', x1)
        .attr('x2', x2)
        .attr('y1', y1)
        .attr('y2', y2)
        .attr('opacity', '0.4')
        .attr('stroke', 'black')
}
export function circle(svgRef: any, x: number, y: number, data: number[]) {
    const svgC = d3.select(svgRef.current)
        .selectAll('circle')
        .data(data)
        .join(
            enter => enter
                .append('circle'),
            update => update
                .attr('class', 'updated'),
            exit => exit.remove()
        )
        .attr('r', function (d: number) { return d })
        .attr('cx', x/* function (d: number, i: number) { return d } */)
        .attr('cy', y/* value => value */)
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr('opacity', '1')
}