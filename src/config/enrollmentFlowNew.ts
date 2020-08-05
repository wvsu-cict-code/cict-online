import { IChart } from "@mrblenny/react-flow-chart";

const chart: IChart = {
    offset: {
        x: 0,
        y: 0
    },
    scale: 1,
    nodes: {
        node1: {
            id: "node1",
            properties: {
                value: 'Start'
            },
            type: "start",
            position: {
                x: 300,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "output",
                    properties: {
                        value: "yes"
                    }
                },
            }
        },
        node2: {
            id: "node2",
            type: "input-output",
            position: {
                x: 300,
                y: 300
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
            }
        },
        node3: {
            id: "node3",
            type: "input-output",
            position: {
                x: 300,
                y: 500
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
            }
        },
        node4: {
            id: "node4",
            type: "input-output",
            position: {
                x: 300,
                y: 700
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
            }
        },
        node5: {
            id: "node5",
            type: "input-output",
            position: {
                x: 300,
                y: 900
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
            }
        },
        node6: {
            id: "node6",
            type: "input-output",
            position: {
                x: 300,
                y: 1100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
            }
        },

    },
    selected: {},
    hovered: {},
    links: {}
};

export default chart