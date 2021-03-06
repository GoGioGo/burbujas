import { useEffect, useState, useRef } from 'react'
import { generateNewJson, graflinea, printCircleP, transitionCircle, text, findBigEstate, findBigEstateM, setText, findJson, printLine } from '../functions/Functions'
import fully1 from '../jsons/fullyVaccinated.json'
import fully2 from '../jsons/fullyVaccinated2.json'
import fully3 from '../jsons/fullyVaccinated3.json'

import partially1 from '../jsons/partiallyVaccinated.json'
import partially2 from '../jsons/partiallyVaccinated2.json'
import partially3 from '../jsons/partiallyVaccinated3.json'

import not1 from '../jsons/notVaccinated.json'
import not2 from '../jsons/notVaccinated2.json'
import not3 from '../jsons/notVaccinated3.json'

import * as d3 from 'd3'
import { Modal } from 'antd'
import 'antd/dist/antd.css'
import { propCircle, propLine, propText, propC } from '../functions/Interfaces'

export default function Index() {
    let initialDataJson: propC = {
        id: 0,
        country: '',
        poblationWeighted: 0,
        poblationMedian: 0,
        percentage: 0
    }
    //vaciando los json en states
    const [fullyV1, setfullyV1] = useState<propC[]>(fully1)
    const [fullyV2, setfullyV2] = useState<propC[]>(fully2)
    const [fullyV3, setfullyV3] = useState<propC[]>(fully3)

    const [partiallyV1, setpartiallyV1] = useState<propC[]>(partially1)
    const [partiallyV2, setpartiallyV2] = useState<propC[]>(partially2)
    const [partiallyV3, setpartiallyV3] = useState<propC[]>(partially3)

    const [notV1, setnotV1] = useState<propC[]>(not1)
    const [notV2, setnotV2] = useState<propC[]>(not2)
    const [notV3, setnotV3] = useState<propC[]>(not3)

    //json para generar nuevos datos de prueba
    const [newJson, setnewJson] = useState<propC[]>(not3)
    // creando ref para cada div
    const fullyVaccinated = useRef<SVGSVGElement | null>(null)
    const partiallyVaccinated = useRef<SVGSVGElement | null>(null)
    const notVaccinated = useRef<SVGSVGElement | null>(null)
    const titulos = useRef<SVGSVGElement | null>(null)
    const pie = useRef<SVGSVGElement | null>(null)
    const cabezaModal = useRef<SVGSVGElement | null>(null)
    const percentageModal = useRef<SVGSVGElement | null>(null)
    const absisas = useRef<SVGSVGElement | null>(null)
    const footer = useRef<SVGSVGElement | null>(null)
    //array con textos para los marcos
    let per = ['0%', '20%', '40%', '60%', '80%', '100%']
    let abs = ['2.0', '4.5', '7.0', '9.5']
    let tit = ['Fully Vaccinated', 'Partially Vaccinated', 'Not Vaccinated']

    const [ge, setge] = useState<propC>(initialDataJson)//variable de un componente json para mostrar el modal con sus datos
    //modal
    const [modal, setmodal] = useState(false)
    const abrirModal = (x: propC) => {
        let cm2: propC = findJson(x.id, fullyV2)
        let cm3: propC = findJson(x.id, fullyV3)
        let cn1: propC = findJson(x.id, notV1)
        let cn2: propC = findJson(x.id, notV2)
        let cn3: propC = findJson(x.id, notV3)
        let cp1: propC = findJson(x.id, partiallyV1)
        let cp2: propC = findJson(x.id, partiallyV2)
        let cp3: propC = findJson(x.id, partiallyV3)

        graflinea(x, cm2, cm3, 'graphic', 'orange')
        graflinea(cn1, cn2, cn3, 'graphic', 'black')
        graflinea(cp1, cp2, cp3, 'graphic', 'blue')

        printLine({ x1: 5, y1: 52, x2: 300, y2: 52, opacity: '.3' }, 'graphic', 'black')
        printLine({ x1: 5, y1: 123, x2: 300, y2: 123, opacity: '.3' }, 'graphic', 'black')
        printLine({ x1: 5, y1: 192, x2: 300, y2: 192, opacity: '.3' }, 'graphic', 'black')

        text({ x: 10, y: 12, text: 'NERVOUSNESS BY SURVEY RESPONDENTS', size: '14px' }, cabezaModal)
        setText(per.reverse(), percentageModal, 25, 35, '12px', false)
        setText(abs, absisas, 110, 15, '12px', true)
        setText(tit, footer, 130, 30, '14px', true)
        setge(x)
        setmodal(true)
    }
    const cerrarModal = () => {
        setmodal(false)
    }

    let color = '#9ca8ab'
    function click() {
        d3.select("#btnCircles")
            .on("click", () => {
                generateNewJson(newJson)
                transitionCircle(newJson, fullyVaccinated, 'f')

                generateNewJson(newJson)
                transitionCircle(newJson, partiallyVaccinated, 'p')

                generateNewJson(newJson)
                transitionCircle(newJson, notVaccinated, 'n')
            });
    }

    useEffect(() => {
        //imprimiendo circulos y textos con mayor poblacion media y poblacion parcial
        printCircleP(fullyV1, fullyVaccinated, color, 'f')
        text(findBigEstate(fullyV1), fullyVaccinated)
        text(findBigEstateM(fullyV1), fullyVaccinated)
        printCircleP(partiallyV1, partiallyVaccinated, color, 'p')
        text(findBigEstate(partiallyV1), partiallyVaccinated)
        text(findBigEstateM(partiallyV1), partiallyVaccinated)
        printCircleP(notV1, notVaccinated, color, 'n')
        text(findBigEstate(notV1), notVaccinated)
        text(findBigEstateM(notV1), notVaccinated)
        //imprimiendo titulos y porcentajes
        setText(per, pie, 95, 10, '12px', true)
        setText(tit, titulos, 25, 115, '12px', false)
        d3.selectAll('circle')
            .on('click', function (d: propC, e) {
                abrirModal(d)
            })
    }, [])
    return <>
        <div style={{ width: '19%', height: '310px', float: 'left' }}>
            <svg ref={titulos} width='98%' height='310px' style={{ backgroundColor: '#E6E6FA', marginLeft: '10px', marginRight: '10px', marginBottom: '1px' }}></svg>
        </div>

        <div style={{ width: '60%', height: '310px', float: 'left' }}>
            <svg ref={fullyVaccinated} width='98%' height='100px' style={{ backgroundColor: '#E6E6FA', marginLeft: '10px', marginRight: '10px', marginBottom: '1px' }}></svg>
            <svg ref={partiallyVaccinated} width='98%' height='100px' style={{ backgroundColor: '#E6E6FA', marginLeft: '10px', marginRight: '10px', marginBottom: '1px' }}></svg>
            <svg ref={notVaccinated} width='98%' height='100px' style={{ backgroundColor: '#E6E6FA', marginLeft: '10px', marginRight: '10px', marginBottom: '1px' }}></svg>
        </div>

        <div style={{ width: '17%', height: '150px', float: 'left', backgroundColor: '#E6E6FA' }}>
            <h4>Transition</h4>
            <button onClick={click} id='btnCircles'>transicionar</button>
            <h4>View data</h4>

        </div>

        <div style={{ width: '100%', height: '30px', clear: 'both' }}>
            <svg ref={pie} width='58%' height='25px' style={{ backgroundColor: '#E6E6FA', marginLeft: '20%', marginRight: '10px', marginTop: '6px' }}></svg>
        </div>

        <div style={{ width: '100%', height: '100%' }}>
            <Modal
                title='HAVE RESPONDENTS IN THE UNITED KINGDOM RECEIVED THE COVID-19 VACCINE?'
                visible={modal}
                onCancel={cerrarModal}
                onOk={() => { alert('hola') }}
                className='modal'
                width='80%'
                min-height='700px'
                style={{ height: '400px', minHeight: '400px' }}
            >
                <div style={{ width: '62%', height: '310px', float: 'left' }}>
                    <svg ref={cabezaModal} width='100%' height='25px' style={{ color: 'red', width: '100%', height: '20px', display: 'block' }} />
                    <svg ref={percentageModal} width='17%' height='200px' style={{ float: 'left' }} />
                    <svg id='graphic' width='62%' height='200px' style={{ float: 'left' }} />
                    <svg ref={absisas} width='100%' height='20px' style={{ display: 'block', clear: 'both' }} />
                    <svg ref={footer} width='100%' height='35px' style={{ display: 'block' }} />
                </div>

                <svg width='30%' height='310px' style={{ float: 'left', backgroundColor: 'blue' }} />
            </Modal>
        </div>
    </>
}