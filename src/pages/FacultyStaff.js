import 'storm-react-diagrams/dist/style.min.css';

import React, { Component } from 'react';
import Typist from 'react-typist';
import { DefaultNodeModel, DiagramEngine, DiagramModel, DiagramWidget } from 'storm-react-diagrams';
import uuidv4 from 'uuid/v4';
import Footer from '../components/Footer';
import Helmet from '../components/Helmet';
import Navbar from '../components/Navbar';
import EmployeeModal from '../components/EmployeeModal';
import { connections, nodes } from '../config/faculty-and-staff';

const Typer = text => (
    <h1 className="font-light text-4xl text-white">{text}</h1>
)

class FacultyStaff extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Test',
            infoOpen: false,
            specialization: '',
            description: '',
            hobbies: '',
            photoUrl: 'http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'
        }

        this.engine = new DiagramEngine();
        this.model = new DiagramModel();
        this.engine.installDefaultFactories();
    }

    resetTitle = () => {
        this.setState({ title: Typer("Faculty and Staff") })
    }

    showInfo = info => {        
        this.setState({
            title: info.entity.name,
            photoUrl: info.entity.extra.photoUrl,
            description: info.entity.extra.description,
            specialization: info.entity.extra.specialization,
            hobbies: info.entity.extra.hobbies,
            infoOpen: true
        })
    }

    hideInfo = () => {
        this.setState({ infoOpen: false })
    }

    onInfoClose = () => {
        this.setState({ infoOpen: false })
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
            parts[i].extra = {
                description: nodes[i].description,
                photoUrl: nodes[i].photoUrl,
                specialization: nodes[i].specialization,
                hobbies: nodes[i].hobbies,
            }
            nodes[i].ports.map(j => {
                console.log("ports added")
                if (j.type === 'in') {
                    port = parts[i].addInPort(` ${j.name}`)
                } else {
                    port = parts[i].addOutPort(` ${j.name}`)
                }
                ports.push(port)
            })
        })

        parts.map(i => this.model.addNode(i))

        parts.forEach(node => {
            node.addListener({
                selectionChanged: e => {
                    if (e.isSelected) {
                        console.log(e)
                        console.log(`${e.entity.x},${e.entity.y}`)
                        if (e.entity.color !== "#EC1261") {
                            app.showInfo(e)
                        } else {
                            app.hideInfo()
                        }
                    } else {
                        this.hideInfo()
                    }
                }
            })
        })

        // Delay fix for non-displaying links
        setTimeout(() => {
            connections.map(i => {
                console.log(i)
            })
        }, 10)

        connections.map(i => {
            const link = ports[i[0]].link(ports[i[1]])
            return app.model.addLink(link)
        })

        app.engine.setDiagramModel(app.model);
    }

    render() {
        const { title, infoOpen, photoUrl, description, specialization, hobbies } = this.state
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
                            <div className="flex">
                                <div className="p-8">
                                    <h1 className="font-light text-4xl text-white">Faculty & Staff</h1>
                                    <Typist className="text-white" startDelay={1500} >Nice to meet you!</Typist>
                                </div>
                            </div>
                        </div>
                        <DiagramWidget key={uuidv4()} className="w-full h-screen" maxNumberPointsPerLink={0} diagramEngine={this.engine} />
                    </div>
                </div>
                <Footer />
                <EmployeeModal
                    title={title}
                    isShown={infoOpen}
                    onCloseComplete={() => this.onInfoClose()}
                    confirmLabel="OK"
                    hasCancel={false}
                    description={() => (
                        <div>
                            <img className="h-24 w-24 rounded-full mb-4" alt="" src={photoUrl} />                            
                            <p>{description}</p>
                            <p className="mt-4"><span className="font-bold">Specializations:</span> {specialization}</p>
                            <p className="pt-4"><small><span className="font-bold">Hobbies:</span> {hobbies}</small></p>
                        </div>
                    )}
                />
            </div>
        )
    }
}

export default FacultyStaff