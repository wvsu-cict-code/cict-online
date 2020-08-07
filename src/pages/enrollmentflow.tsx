import { CaretDownOutlined, CaretUpOutlined, CloudDownloadOutlined, SwapOutlined } from '@ant-design/icons';
import { FlowChart, INodeDefaultProps, INodeInnerDefaultProps, IPortDefaultProps, ICanvasOuterDefaultProps, IChart } from "@mrblenny/react-flow-chart";
import { Button, Divider, Drawer, Layout, Badge, Alert } from "antd";
import Footerbar from "components/Footerbar";
import Navbar from "components/Navbar";
import SEO from "components/SEO";
import SocialSection from "components/SocialSection";
import styled from 'styled-components'
import { cloneDeep, mapValues } from "lodash";
import React, { Component, useEffect, useState } from 'react';
import ReactTypingEffect from '../components/ReactTypingEffect';
import * as actions from '../config/actions';
import enrollmentFlowNew from '../config/enrollmentFlowNew';
import enrollmentFlowContinuing from '../config/enrollmentFlowContinuing';
import { DEFAULT_THEME } from "../themes";
import { applyTheme } from "../themes/utils";
const { Content } = Layout
const PortDefaultOuter = (props: any) => <div className="w-6 h-6 rounded-full border-2 border-blue-600 bg-white cursor-pointer flex justify-center items-center text-blue-600 hover:text-green-600 hover:border-green-600">{props.children}</div>


const CanvasOuter = styled.div<ICanvasOuterDefaultProps>`
  position: relative;
  background-size: 10px 10px;
  background-color:rgba(0,0,0,0.03);
  width: 100%;
  height: 1024px;
  overflow: hidden;
  cursor: not-allowed;
` as any

const Port = (props: IPortDefaultProps) => (
    <PortDefaultOuter>
        {props.port.properties && props.port.properties.reverse ? <div className="mx-auto hover:text-green-600"><CaretUpOutlined className="mb-2" /></div> : <div className="mx-auto hover:text-green-600"><CaretDownOutlined /></div>}
    </PortDefaultOuter>
)

const Node = React.forwardRef(({ node, children, ...otherProps }: INodeDefaultProps, ref: React.Ref<HTMLDivElement>) => {
    console.log({ otherProps })
    switch (node.type) {
        case 'start':
            return (
                <div ref={ref} {...otherProps} className="uppercase absolute p-4 rounded bg-green-500 text-white w-32 max-w-xs h-12 flex justify-center items-center">
                    {children}
                </div>
            )
            break;
        case 'student':
            return (

                <div ref={ref} {...otherProps} className={`absolute p-10 rounded bg-blue-600 text-white w-64 max-w-xs h-24 flex justify-center items-center ${otherProps.isSelected && 'shadow-lg'}`}>
                    {children}
                </div>

            )
            break;
        case 'adviser':
            return (
                <div ref={ref} {...otherProps} className="absolute p-4 rounded bg-orange-200 w-64 max-w-xs h-24 flex justify-center items-center">
                    {children}
                </div>
            )
            break;
        case 'finance':
            return (

                <div ref={ref} {...otherProps} className="absolute p-4 rounded bg-red-200 w-64 max-w-xs h-24 flex justify-center items-center">
                    {children}
                </div>

            )
            break;
        case 'osa':
            return (

                <div ref={ref} {...otherProps} className="absolute p-4 rounded bg-green-200 w-64 max-w-xs h-24 flex justify-center items-center">
                    {children}
                </div>
            )
            break;
        case 'end':
            return (
                <div ref={ref} {...otherProps} className="uppercase absolute p-4 rounded bg-gray-900 text-white w-32 max-w-xs h-12 flex justify-center items-center">
                    {children}
                </div>
            )
            break;
        default:
            return (

                <div ref={ref} {...otherProps} className="absolute p-4 rounded bg-white w-64 max-w-xs h-24 flex justify-center items-center">
                    {children}
                </div>
            )
            break;
    }
})


const NodeInner = ({ node }: INodeInnerDefaultProps) => {
    if (node.type) {
        return (
            <div>
                <p className='px-4 text-center pt-4 mx-auto'>
                    {node.properties && node.properties.description ? <Badge dot>{node.properties && node.properties.value}&nbsp;</Badge> : node.properties && node.properties.value}
                </p>
            </div>
        )
    }
}


class SelectableChartComponent extends Component<any, IChart> {
    constructor(props: any) {
        super(props)
    }
    public state = cloneDeep(this.props.data)

    public render() {
        const chart = this.state
        const stateActions = mapValues(actions, (func: any) =>
            (...args: any) => this.setState(func(...args))) as typeof actions

        return (
            <>
                <Drawer
                    title="Details"
                    placement="right"
                    closable
                    onClose={null}
                    mask={false}
                    visible={chart.selected.type ? true : false}
                >
                    <p>{this.state.nodes[chart.selected.id] && this.state.nodes[chart.selected.id].properties && this.state.nodes[chart.selected.id].properties.description || 'No Description'}</p>
                </Drawer>
                <FlowChart config={{
                    showArrowHead: true,
                    selectable: true,
                    readonly: false,
                    smartRouting: true,

                }}
                    chart={chart}
                    callbacks={stateActions}
                    Components={{
                        NodeInner,
                        Node,
                        Port,
                        CanvasOuter,
                    }}
                />

            </>
        )
    }
}

export default () => {
    const [theme, setTheme] = useState(DEFAULT_THEME);
    const [data, setData] = useState('new')
    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const themeModeHandler = () => (theme === 'base' ? setTheme('dark') : setTheme('base'));
    return (
        <>
            <SEO
                title="Enrollment Flow | WVSU CICT"
                description="Check our enrollment process"
                url="https://cictwvsu.com/encrollmentflow/"
                image="https://github.com/wvsu-cict-code/cict-online/raw/development/src/assets/social-image-9.jpg"
                twitterUsername="cictwvsu"
            />
            <Layout className="layout">
                <Layout>
                    <Navbar showApplication={false} themeState={theme} themeModeHandler={themeModeHandler} defaultSelected={['1']} />
                    <Content className="layout p-0">
                        <div className="mx-auto container px-8">
                            <div className={`my-4 ${theme === 'base' ? 'text-black' : 'text-white'}`}>
                                <span className="text-3xl mb-4">
                                    {data === 'old' ? <ReactTypingEffect key="__old" speed={100} eraseDelay={200000} typingDelay={200} text={`Enrollment (Continuing Student)`} /> :
                                        <ReactTypingEffect key="__new" speed={100} eraseDelay={200000} typingDelay={200} text={`Enrollment (New Student)`} />}
                                </span>
                            </div>
                        </div>
                        <Divider />
                        <div className="container mx-auto px-8 pb-8">
                            <Button.Group className="mb-4">
                                <Button icon={<SwapOutlined />} type="primary" onClick={() => setData(data === 'old' ? 'new' : 'old')}>{`${data === 'old' ? 'New Student' : 'Continuing Student'}`}</Button>
                                <Button icon={<CloudDownloadOutlined />} href={`${data === 'old' ? 'https://github.com/wvsu-cict-code/cict-online/raw/development/src/downloads/Enrollment-Continuing-2020.pdf' : 'https://github.com/wvsu-cict-code/cict-online/raw/development/src/downloads/Enrollment-New-2020.pdf'}`} target="_blank">Download PDF</Button>
                            </Button.Group>
                            <br />
                            <Alert showIcon type="info" message="Click on a node item with red badge to interact and use the mouse buttons to navigate." />

                        </div>

                        <div className="mx-auto container px-6">
                            {data === 'old' ? <SelectableChartComponent key="_old" data={enrollmentFlowContinuing} /> : <SelectableChartComponent key="_new" data={enrollmentFlowNew} />}
                        </div>
                    </Content>

                    <SocialSection themeState={theme} />
                    <Footerbar themeState={theme} />
                </Layout>
            </Layout>

        </>)
}
