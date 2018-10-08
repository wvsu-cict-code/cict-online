import React, { Component } from 'react';
import Helmet from '../components/Helmet';
import { DiagramEngine, DiagramModel, DefaultNodeModel, DiagramWidget } from "storm-react-diagrams"
import { Manager, Box, SideSheet } from 'evergreen-ui'
import 'storm-react-diagrams/dist/style.min.css'
import Typist from 'react-typist'
import Navbar from '../components/Navbar';
import DefaultContainer from '../components/DefaultContainer';

const Typer = text => {
    console.log(text)
    return (
        <h1 className="font-normal text-4xl text-white">{text}</h1>
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
        var node1 = new DefaultNodeModel("Dr. Joel T. De Castro", "#FFCA28");
        let port1 = node1.addOutPort("Dean");
        node1.setPosition(100, 100);

        // 4) create another default node
        var node2 = new DefaultNodeModel("Dr. Arnel N. Secondes", "#1565C0");
        let port2 = node2.addInPort("Secretary");
        node2.setPosition(400, 100);

        var node3 = new DefaultNodeModel("Dr. Ma. Luche Sabayle", "#1565C0");
        let port3 = node3.addInPort("Associate Dean");
        node3.setPosition(400, 200);

        // 5) link the ports
        let link1 = port1.link(port2);
        let link2 = port1.link(port3);


        // 6) add the models to the root graph
        let nodes = [node1, node2, node3];

        this.model.addAll(node1, node2, node3, port1, port2, port3, link1, link2)

        nodes.forEach(node => {
            node.addListener({
                selectionChanged: e => {
                    if (e.isSelected) {
                        app.showInfo(e)
                    } else {
                        this.resetTitle()
                    }
                }
            })
        })

        // 7) load model into engine
        this.engine.setDiagramModel(this.model);

    }

    render() {
        const { title } = this.state
        return (
            <div>
                <Helmet
                    title="CICT Online - Geek Mode"
                    description="West Visayas State University, College of Information and Communications Technology Website"
                />
                <Navbar />
                <div className="bg-grey-darkest">
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
        )
    }
}

export default FacultyStaff