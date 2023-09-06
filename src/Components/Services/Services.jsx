import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';
// import { motion } from 'framer-motion'

const Services = () => {
    // const transition = { duration: '1', type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="services" id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
                <span>Services</span>
                <span>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br />Officiis consectetur est earum, quisquam tempora rem quidem consequatur unde modi veniam.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
            </div>
            {/* right side */}
            <div className="cards">
                <div
                    // initial={{ left: '25rem' }}
                    // whileInView={{ left: '25%' }}
                    // transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
                    />
                </div>

                {/* second card */}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={'Html, Css, Javascript, React, Figma, Sketch, Photoshop, Adobe, xd'}
                    />
                </div>
                {/* third card */}
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={'Lerom ispum dummy text are usually use in section where we need some random text'}
                    />
                </div>
            </div>
        </div>
    )
}

export default Services