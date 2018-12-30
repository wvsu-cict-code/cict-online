import { Button, Checkbox, Form, Icon, Input, Select, Spin } from 'antd';
import _ from 'lodash';
import React, { Component } from 'react';
import Gravatar from 'react-gravatar';
import InlineSVG from 'svg-inline-react';

import RegistrationSteps from './RegistrationSteps';

const jdenticon = require('jdenticon')

const FormItem = Form.Item;
const Option = Select.Option;
const yearStartRange = _.range(2000, (new Date()).getFullYear(), 1)
const yearEndRange = _.range(2004, (new Date()).getFullYear() + 1, 1)
const courses = [
    {
        name: 'Bachelor of Science in Information Management',
        value: 'bsim'
    },
    {
        name: 'Bachelor of Science in Information Technology',
        value: 'bsit'
    },
    {
        name: 'Bachelor of Science in Information Systems',
        value: 'bsis'
    },
    {
        name: 'Bachelor of Science in Computer Science',
        value: 'bscs'
    },
    {
        name: 'Masters in Information Technology',
        value: 'mit'
    },
]

const RegistrationForm = props => (
    <React.Fragment>
        <RegistrationSteps current={0} />
        <Spin spinning={props.submitting}>
            <Form key={props.formKey} onSubmit={props.handleSubmit} className="alumni-registration-form px-4 lg:px-auto mx-auto pb-8 text-left sm:px-4 xs:px-4">
                <small>* Required Fields</small>
                <FormItem required label="Basic Info" className="my-0">
                    <FormItem className="mt-0">
                        <Input addonBefore="First Name" required size="large" name="fname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Your First Name" onChange={e => props.handleChange(e, 'fname')} />
                    </FormItem>
                    <FormItem>
                        <Input addonBefore="Middle Name" required size="large" name="mname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Your Middle Name" onChange={e => props.handleChange(e, 'mname')} />
                    </FormItem>
                    <FormItem>
                        <Input addonBefore="Last Name" required size="large" name="sname" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="* Your Last Name" onChange={e => props.handleChange(e, 'sname')} />
                    </FormItem>
                </FormItem>

                <FormItem required label="Year Entered the College">
                    <Select showSearch size="large" placeholder="Select a Year" onChange={e => props.handleSelectionChange(e, 'ystart')}>
                        {yearStartRange.map(i => (
                            <Option key={i} value={i}>{i}</Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem required label="Year Graduated from the College">
                    <Select showSearch size="large" placeholder="Select a Year" onChange={e => props.handleSelectionChange(e, 'yend')}>
                        {yearEndRange.map(i => (
                            <Option key={i} value={i}>{i}</Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem required label="Course">
                    <Select showSearch size="large" placeholder="Select a Course" onChange={e => props.handleSelectionChange(e, 'course')}>
                        {courses.map(i => (
                            <Option key={i.value} value={i.value}>{i.name}</Option>
                        ))}
                    </Select>
                </FormItem>
                <FormItem required label="Company Affiliated">
                    <Input required addonBefore="Details" name="company" size="large" placeholder="Where are you working now?" onChange={e => props.handleChange(e, 'company')} />
                </FormItem>
                <FormItem required label="Profile Email">
                    <FormItem>
                        <p className="text-center mb-4" >
                            {
                                props.noGravatar ?
                                    <InlineSVG src={jdenticon.toSvg(props.email, 150)} className="rounded-full mx-0 my-4" /> :
                                    <Gravatar default="monsterid" size={150} className="rounded-full mx-0 my-4" email={props.email} />
                            }
                        </p>
                        <Input addonBefore={props.noGravatar ? "Email" : "Gravatar Email"} type="email" size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder={props.noGravatar ? "Email" : "Gravatar Email"} onChange={e => props.handleChange(e, 'email')} name="email" />
                        <p><a href="https://en.gravatar.com/" target="_blank" rel="noopener noreferrer">Create your own Gravatar</a></p>
                        <Checkbox name="noGravatar" checked={props.noGravatar} onChange={props.onCheckboxChange}>I don't have a Gravatar email.</Checkbox>
                    </FormItem>
                    <FormItem required label="Mobile/Landline">
                        <Input name="contact" size="large" placeholder="Your Number" onChange={e => props.handleChange(e, 'contact')} />
                    </FormItem>


                </FormItem>

                <p className="text-center">
                    <Button loading={props.submitting} type="primary" htmlType="submit" className="w-full">
                        Register Now
                </Button>
                    <Button onClick={props.skipRegistration} type="ghost" htmlType="submit" className="w-full mt-2">
                        Already Registered?
                </Button>
                </p>
            </Form>
        </Spin>
    </React.Fragment>
)

export default RegistrationForm;