import React from 'react';
import './App.css';

const Experience = () => {
    return (<div>
        <h2><i style={{fontSize:24+'px'}} className='fas'>&#xf0b1;</i> Work Experience</h2>
        <h4>Systems Engineer, Tata Consultancy Services (21.01.2020-Till Date)</h4>
        <ul>
            <li>Working on POC on integrating NVDLA with RISC-V SOC chip.</li>
            <li>Learning Python scripting along with C and Linux concepts.</li>
            <li>Learning competetive programming in Hackrerrank.</li>
            <li>Worked on a Poc on emulating the RISC-V processor without the need of actual hardware.</li>
        </ul>
        <h4>Systems Engineer, Tata Consultancy Services (01.08.2019-20.01.20)</h4>
        <ul>
            <li>Learned ASIC design flow and physical design flow.</li>
            <li>Implemented PnR flow on two 28nm block level designs.</li>
            <li>Have hands on experience with Synopsys tool suite.</li>
            <li>Underwent training in Static Timing Analysis.</li>
        </ul>
        <h4>Application Support Engineer, Tata Consultancy Services (26.10.2017-31.07.19)</h4>
        <ul>
            <li>Responsible for the application support of the client application which is liable for payroll and billing cycle.</li>
            <li>Assisted in automating few standard procedures to reduce and make the daily workload efficient.</li>
            <li>Worked closely with test, development and requirements team members to analyse, investigate and resolve Help Desk tickets submitted by end users.</li>
        </ul>
        </div>
    );
}

export default Experience;