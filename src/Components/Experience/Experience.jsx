import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Experience = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="experience" id='Experience'>
            <div className="achievement">
                <div className="circle" style={{ color: darkMode ? 'black' : '' }}>8+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>years</span>
                <span >Experience</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{ color: darkMode ? 'black' : '' }}>20+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>completed </span>
                <span >Projects</span>
            </div>
            <div className="achievement">
                <div className="circle" style={{ color: darkMode ? 'black' : '' }}>5+</div>
                <span style={{ color: darkMode ? 'white' : '' }}>company</span>
                <span>work</span>
            </div>
        </div>
    )
}

export default Experience