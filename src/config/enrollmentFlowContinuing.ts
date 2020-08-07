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
                value: 'Start',
                description: 'Pre-Enrollment activities include accessing your IUIS accounts, updating of your personal information, complying to enrollment confirmation agreements including downloading and uploading of scholarship forms and finally submitting your Enrollment Confirmation.'
            },
            type: "start",
            position: {
                x: 100,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "output"
                },
            }
        },
        node2: {
            id: "node2",
            properties: {
                value: 'Student logs-in to the Student module'
            },
            type: "student",
            position: {
                x: 100,
                y: 250
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },
        node3: {
            id: "node3",
            properties: {
                value: 'Update Personal Information'
            },
            type: "input-output",
            position: {
                x: 100,
                y: 450
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },
        node4: {
            id: "node4",
            properties: {
                value: 'Comply the Enrollment Confirmation Agreement and Requirements',
                description: 'Student will download and upload the scholarship and (Learning Resource Packet) LRP Agreement Forms'
            },
            type: "input-output",
            position: {
                x: 100,
                y: 650
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input"
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },
        node5: {
            id: "node5",
            properties: {
                value: 'Submit the Enrollment Confirmation'
            },
            type: "input-output",
            position: {
                x: 100,
                y: 850
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output",
                },
            }
        },
        node6: {
            id: "node6",
            properties: {
                value: 'College Advisers Receives Confirmation'
            },
            type: "adviser",
            position: {
                x: 500,
                y: 850
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node7: {
            id: "node7",
            properties: {
                value: 'College Advisers update the student status and level. Proceed to Enlistment.',
                description: 'After you have submitted the Enrollment Confirmation, your data will travel a long way from the College to the OSA, to the Finance Office. (Please be considerate as these offices entertains all enrollees and has a skeletal staff (due to pandemic) to accommodate all.)'
            },
            type: "adviser",
            position: {
                x: 500,
                y: 650
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node8: {
            id: "node8",
            properties: {
                value: 'OSA receives the student enlistment and confirmation.'
            },
            type: "osa",
            position: {
                x: 500,
                y: 450
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node9: {
            id: "node9",
            properties: {
                value: 'OSA Tags the Scholarship.'
            },
            type: "osa",
            position: {
                x: 500,
                y: 250
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node10: {
            id: "node10",
            properties: {
                value: 'Finance receives the enlisted students and w/ scholarship (if applicable).'
            },
            type: "finance",
            position: {
                x: 500,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node11: {
            id: "node11",
            properties: {
                value: 'Finance review/validate and save the registration assessment.',
                description: 'After the Finance office, the IUIS will send the Enrollee a Notification (thru email and IUIS message, this is what you have to watch out for after submitting your Enrollment Confirmation). The ball is in you again and you need to perform several actions in your IUIS account.'
            },
            type: "finance",
            position: {
                x: 900,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },
        node12: {
            id: "node12",
            properties: {
                value: 'Student receives assessment email/message.',
                description: 'Please be patient and check your email and IUIS account from time to time.'
            },
            type: "input-output",
            position: {
                x: 900,
                y: 250
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },
        node13: {
            id: "node13",
            properties: {
                value: 'Student download and review the registration and assessment.'
            },
            type: "input-output",
            position: {
                x: 900,
                y: 450
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },
        node14: {
            id: "node14",
            properties: {
                value: 'With Payment?'
            },
            type: "input-output",
            position: {
                x: 900,
                y: 650
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        linkColor: '#63D471'
                    }
                },
                port3: {
                    id: "port3",
                    type: "output",
                    properties: {
                        linkColor: '#F8333C'
                    }
                },
            }
        },
        node15: {
            id: "node15",
            properties: {
                value: 'Pay thru cashier, SM bills or any authorized banks.'
            },
            type: "student",
            position: {
                x: 900,
                y: 900
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
            }
        },
        node16: {
            id: "node16",
            properties: {
                value: 'Download/Print COR.',
                description: 'If you can print your Certificate of Registration, fine. If not the Registrar will schedule when you can get your duly approved Certificate of Registration (COR).'
            },
            type: "input-output",
            position: {
                x: 1300,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node17: {
            id: "node17",
            properties: {
                value: 'Can Print COR?'
            },
            type: "input-output",
            position: {
                x: 1300,
                y: 250
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true,
                        linkColor: '#63D471'

                    }
                },
                port2: {
                    id: "port2",
                    type: "input",
                    properties: {
                        reverse: true,
                        linkColor: '#F8333C'
                    }
                },
                port3: {
                    id: "port3",
                    type: "output",
                    properties: {
                        reverse: true,

                    }
                },
            }
        },
        node18: {
            id: "node18",
            properties: {
                value: 'Student receives enrollment or payment confirmation via email/messaging.',
                description: 'Payment is only for our graduate school and students who did not applied for Free Higher Education (FHE) scholarship.'
            },
            type: "input-output",
            position: {
                x: 1300,
                y: 450
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node19: {
            id: "node19",
            properties: {
                value: 'Finance/SA Post Student Scholarship.'
            },
            type: "finance",
            position: {
                x: 1300,
                y: 650

            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                    properties: {
                        reverse: true
                    }
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },
        node20: {
            id: "node20",
            properties: {
                value: "Claim the COR at the Registrar's Office on the scheduled date."
            },
            type: "input-output",
            position: {
                x: 1700,
                y: 250
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output"
                },
            }
        },

        node21: {
            id: "node21",
            properties: {
                value: "End"
            },
            type: "end",
            position: {
                x: 1900,
                y: 100
            },
            ports: {
                port1: {
                    id: "port1",
                    type: "input",
                },
                port2: {
                    id: "port2",
                    type: "output",
                    properties: {
                        reverse: true
                    }
                },
            }
        },

    },
    selected: {},
    hovered: {},
    links: {
        link1: {
            id: 'link1',
            from: {
                nodeId: 'node1',
                portId: 'port1',
            },
            to: {
                nodeId: 'node2',
                portId: 'port1',
            },
        },
        link2: {
            id: 'link2',
            from: {
                nodeId: 'node2',
                portId: 'port2',
            },
            to: {
                nodeId: 'node3',
                portId: 'port1',
            },
        },
        link3: {
            id: 'link3',
            from: {
                nodeId: 'node3',
                portId: 'port2',
            },
            to: {
                nodeId: 'node4',
                portId: 'port1',
            },
        },
        link4: {
            id: 'link4',
            from: {
                nodeId: 'node4',
                portId: 'port2',
            },
            to: {
                nodeId: 'node5',
                portId: 'port1',
            },
        },
        link5: {
            id: 'link5',
            from: {
                nodeId: 'node5',
                portId: 'port2',
            },
            to: {
                nodeId: 'node6',
                portId: 'port2',
            },
        },
        link6: {
            id: 'link6',
            from: {
                nodeId: 'node6',
                portId: 'port1',
            },
            to: {
                nodeId: 'node7',
                portId: 'port2',
            },
        },
        link7: {
            id: 'link7',
            from: {
                nodeId: 'node7',
                portId: 'port1',
            },
            to: {
                nodeId: 'node8',
                portId: 'port2',
            },
        },
        link8: {
            id: 'link8',
            from: {
                nodeId: 'node8',
                portId: 'port1',
            },
            to: {
                nodeId: 'node9',
                portId: 'port2',
            },
        },
        link9: {
            id: 'link9',
            from: {
                nodeId: 'node9',
                portId: 'port1',
            },
            to: {
                nodeId: 'node10',
                portId: 'port2',
            },
        },
        link10: {
            id: 'link10',
            from: {
                nodeId: 'node10',
                portId: 'port1',
            },
            to: {
                nodeId: 'node11',
                portId: 'port1',
            },
        },
        link11: {
            id: 'link11',
            from: {
                nodeId: 'node11',
                portId: 'port2',
            },
            to: {
                nodeId: 'node12',
                portId: 'port1',
            },
        },
        link12: {
            id: 'link12',
            from: {
                nodeId: 'node12',
                portId: 'port2',
            },
            to: {
                nodeId: 'node13',
                portId: 'port1',
            },
        },
        link13: {
            id: 'link13',
            from: {
                nodeId: 'node13',
                portId: 'port2',
            },
            to: {
                nodeId: 'node14',
                portId: 'port1',
            },
        },
        link14: {
            id: 'link14',
            from: {
                nodeId: 'node14',
                portId: 'port2',
            },
            to: {
                nodeId: 'node15',
                portId: 'port1',
            },
        },
        link15: {
            id: 'link14',
            from: {
                nodeId: 'node14',
                portId: 'port3',
            },
            to: {
                nodeId: 'node19',
                portId: 'port2',
            },
        },
        link16: {
            id: 'link16',
            from: {
                nodeId: 'node19',
                portId: 'port1',
            },
            to: {
                nodeId: 'node18',
                portId: 'port2',
            },
        },
        link17: {
            id: 'link17',
            from: {
                nodeId: 'node18',
                portId: 'port1',
            },
            to: {
                nodeId: 'node17',
                portId: 'port3',
            },
        },
        link18: {
            id: 'link18',
            from: {
                nodeId: 'node17',
                portId: 'port1',
            },
            to: {
                nodeId: 'node16',
                portId: 'port2',
            },
        },
        link19: {
            id: 'link19',
            from: {
                nodeId: 'node16',
                portId: 'port1',
            },
            to: {
                nodeId: 'node21',
                portId: 'port1',
            },
        },
        link20: {
            id: 'link20',
            from: {
                nodeId: 'node17',
                portId: 'port2',
            },
            to: {
                nodeId: 'node20',
                portId: 'port1',
            },
        },
        link21: {
            id: 'link21',
            from: {
                nodeId: 'node20',
                portId: 'port2',
            },
            to: {
                nodeId: 'node21',
                portId: 'port2',
            },
        },
    }
};

export default chart