import 'storm-react-diagrams/dist/style.min.css';

import React, { Component } from 'react';
import Typist from 'react-typist';
import { DefaultNodeModel, DiagramEngine, DiagramModel, DiagramWidget } from 'storm-react-diagrams';

import Helmet from '../components/Helmet';
import Navbar from '../components/Navbar';
import { connections, nodes } from '../config/faculty-and-staff';

const Typer = text => {
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
                if (j.type === 'in') {
                    port = parts[i].addInPort(j.name)
                } else {
                    port = parts[i].addOutPort(j.name)
                }
                ports.push(port)
            })
        })

        parts.map(i => {
            this.model.addNode(i)
        })

        parts.forEach(node => {
            node.addListener({
                selectionChanged: e => {
                    if (e.isSelected) {
                        console.log(e.entity.x + "," + e.entity.y)
                        if (e.entity.name !== "+") {
                            app.showInfo(e)
                        }
                    } else {
                        this.resetTitle()
                    }
                }
            })
        })

        setTimeout(function() {
            connections.map(i => {
                const link = ports[i[0]].link(ports[i[1]])
                app.model.addLink(link)
            })
        }, 0)

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