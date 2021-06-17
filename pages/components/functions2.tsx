import { useRef } from "react";
import * as d3 from 'd3'
import { data } from './Interfaces'

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
    let length = Math.ceil(Math.random() * 20)
    for (let i = 0; i < length; i++)
        array[i] = Math.ceil(Math.random() * 100)
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

export function linePath(svgRef: any, x: number[], y: number[], id: number) {
    const svg3 = d3.select(svgRef.current)
    const myLine3 = d3.line()
        .x((value, index) => x[index])
        .y((value: any) => value)
        .curve(d3.curveCardinal)
    svg3
        .selectAll('path')
        .filter('asd' + id)
        .data([y])
        .join(
            enter => enter
                .append('path'),
            update => update
                .attr('opacity', '0.8')
        )
        .attr('d', function (d: any, i) {
            return myLine3(d)
        }/* (value: any) => myLine3(value) */)
        .attr('fill', 'pink')
        .attr('stroke', 'red')
        .attr('class', 'asd' + id)
        .attr('opacity', '0.4')
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
        .attr('opacity', '0.4')
}