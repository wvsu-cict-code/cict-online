import { FlowChartWithState, INodeInnerDefaultProps } from "@mrblenny/react-flow-chart";
import React from 'react';
import enrollmentFlowNew from '../config/enrollmentFlowNew';

const NodeInnerCustom = ({ node }: INodeInnerDefaultProps) => {
    console.log(node.type)
    switch (node.type) {
        case 'start':
            return (
                <div>
                    <p className="p-4 text-center uppercase">{node.properties && node.properties.value}</p>
                </div>
            )
            break;
        case 'applicant':
            <div>
                <p className="p-4">{node.properties && node.properties.value}</p>
            </div>
            break;
        case 'osa':
            <div>
                <p className="p-4">{node.properties && node.properties.value}</p>
            </div>
            break;
        case 'adviser':
            <div>
                <p className="p-4">{node.properties && node.properties.value}</p>
            </div>
            break;
        case 'finance':
            <div>
                <p className="p-4">{node.properties && node.properties.value}</p>
            </div>
            break;
        case 'end':
            <div>
                <p className="p-4">{node.properties && node.properties.value}</p>
            </div>
            break;
        default:
            return (
                <div>
                    <p className="p-4">{node.properties && node.properties.value}</p>
                </div>
            )
            break;
    }
}

const Chart = () => (
    <FlowChartWithState config={{
        readonly: false,
        showArrowHead: true,
        selectable: true,
    }}
        initialValue={enrollmentFlowNew}
        Components={{
            NodeInner: NodeInnerCustom,
        }}
    />
);

export default () => (
    <div>
        <Chart />
    </div>
)
