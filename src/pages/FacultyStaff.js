import React, { Component } from 'react';
import Helmet from '../components/Helmet';
import { DiagramEngine, DiagramModel, DefaultNodeModel, DiagramWidget } from "storm-react-diagrams"
import { Manager, Box, SideSheet } from 'evergreen-ui'
import 'storm-react-diagrams/dist/style.min.css'
import Typist from 'react-typist'
import Navbar from '../components/Navbar';
import DefaultContainer from '../components/DefaultContainer';

const connector = (name, x,y, i, o) => {
        return {
            title: name,
            ports: [
                { name: '('+i+')', type: 'in' },
                { name: '('+o+')', type: 'out' },
            ],
            color: '#EC1261',
            position: [x, y]
        }
}

const nodes = [
    {
        title: '(1) Dr. Joel T. De Castro',
        ports: [{ name: 'Dean (1)', type: 'out' }],
        color: '#FFED18',
        position: [100, 100]
    },
        connector('(2) +', 338, 144, 2, 3),
    {
        title: '(3) Dr. Arnel N. Secondes',
        ports: [{ name: 'College Secretary (4)', type: 'in' }],
        color: '#1565C0',
        position: [471,49]
    },
    {
        title: '(4) Dr. Luche Sabayle',
        ports: [{ name: 'Associate Dean (5)', type: 'in' }],
        color: '#1565C0',
        position: [472,249]
    },
    connector('(5) +', 689.4629104616998,136.6771159874604, 6, 7),  
    {
        title: '(6) Ms. Jenibem Gantala',
        ports: [{ name: 'Graduate School Clerk / Technician (8)', type: 'in' }],
        color: '#333',
        position: [734,18]
    },
        {
        title: '(7) Ms. Marian P. Figueroa',
        ports: [{ name: 'Admin Aide Clerk (9)', type: 'in' }],
        color: '#333',
        position: [725,295]
    },  
    connector('(8) +', 856.4629104616998,150.6771159874604, 10, 11),
    connector('(9) Coordinators', 1001.4629104616998,70.67711598746041, 13, 12),
    connector('(10) College Divisions', 972.4629104616998,257.6771159874604, 15, 14),
            {
        title: '(11) Dr. Bobby D. Gerardo',
        ports: [{ name: 'VPAA, Graduate School Coordinator (16)', type: 'in' }],
        color: '#1565C0',
        position: [1168.3821075795604,148.13196786106622]
    }, 
     {
        title: '(12) Dr. Frank Elijorde',
        ports: [{ name: 'Research Coordinator (17)', type: 'in' }],
        color: '#1565C0',
        position: [1365.8000180273216,222.62610330240636]
    }, 
    {
        title: '(13) Prof. Cyreneo Dofitas Jr.',
        ports: [{ name: 'Research Coordinator (18)', type: 'in' }],
        color: '#1565C0',
        position: [1476.8000180273216,144.62610330240636]
    }, 
        {
        title: '(14) Mr. Evans Sansolis',
        ports: [        
        { name: '(20)', type: 'out' },
        { name: 'Computer Lab Supervisor (19)', type: 'in' },
        ],
        color: '#1565C0',
        position: [1642.8000180273216,210.62610330240636]
    },
            {
        title: '(15) Mr. Evan Sumido',
        ports: [{ name: 'Computer Lab Supervisor (21)', type: 'in' }],
        color: '#1565C0',
        position: [1780.7701672810529,144.04401375016755]
    },
    {
        title: '(16) Mr. Felizardo Ygot',
        ports: [
        { name: 'Computer Lab Personnel (22)', type: 'in' },
        { name: '(23)', type: 'out' },
        ],
        color: '#1565C0',
        position: [1746.8000180273216,302.62610330240636]
    },
        {
        title: '(17) Mr. Russel Laurence Ferrer',
        ports: [{ name: 'Computer Lab Personnel (24)', type: 'in' }],
        color: '#1565C0',
        position: [1838.8000180273216,399.62610330240636]
    },
]

const connections = [
    [0,1],
    [2,3],
    [2,4],
    [2,5],
    [6,7],
    [6,8],
    [5,10],
    [10,13],
    [10,11],
    [12,15],
    [12,16],
    [12,17],
    [19,12],
    [12,20],
    [21, 18],
    [22,23]

]

const Typer = text => {
    console.log(text)
    return (
        <h1 className="font-light text-4xl text-white">{text}</h1>
    )
}

class FacultyStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: Typer("Faculty and Staff")
        }

        this.engine = new DiagramEngine();
        this.model = new DiagramModel();
        this.engine.installDefaultFactories();
    }

    resetTitle = () => {
        this.setState({ title: Typer("Faculty and Staff") })
    }

    showInfo = info => {
        this.setState({ title: Typer(info.entity.name) })
    }

    componentDidMount() {
        const app = this
        const parts = []
        const ports = []
        const links = []
        Object.keys(nodes).map(i => {
            parts.push(new DefaultNodeModel(nodes[i].title, nodes[i].color))
        })

        Object.keys(parts).map(i => {
            parts[i].setPosition(nodes[i].position[0], nodes[i].position[1])
        })

        Object.keys(parts).map(i => {
            let port = null
            nodes[i].ports.map(j => {
                console.log("ports added")
                if(j.type==='in'){
                    port = parts[i].addInPort(j.name)
                }else{
                    port = parts[i].addOutPort(j.name)                    
                }
            ports.push(port)  
            })     
        })

        parts.map(i => {
            this.model.addNode(i)
        })

        connections.map(i => {
            const link = ports[i[0]].link(ports[i[1]])
            app.model.addLink(link)
        })

        parts.forEach(node => {
            node.addListener({
                selectionChanged: e => {                    
                    if (e.isSelected) {
                        console.log(e.entity.x+","+e.entity.y)
                        if (e.entity.name !== "+") {
                            app.showInfo(e)
                        }
                    } else {
                        this.resetTitle()
                    }
                }
            })
        })

        this.engine.setDiagramModel(this.model);

    }

    render() {
        const { title } = this.state
        return (
            <div>
                <Helmet
                    title="Faculty and Staff - CICT Online"
                    description="West Visayas State University, College of Information and Communications Technology Website"
                />
                <Navbar />
                <div className="bg-black">
                    <div className="grid-pattern">
                        <div className="container mx-auto flex border-b border-grey-dark">
                            <img className="h-16 w-16 my-8 rounded-full flex" src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" />
                            <div className="flex">
                                <div className="p-8">
                                    {title}
                                    <Typist className="text-white" startDelay={1500} >Nice to meet you!</Typist>
                                </div>
                            </div>
                        </div>
                        <DiagramWidget className="w-full h-screen" maxNumberPointsPerLink={0} diagramEngine={this.engine} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FacultyStaff