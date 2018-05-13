import React from 'react'

import DateString from './services/DateService'

import './LetterPreview.css'

const LetterPreview = ({ remitter, addressee }) => {
    return (
        <div className="Letter" >
            <div className="letter-paper">
                <div style={{textAlign: 'right'}}>Cartagena de Indias, {DateString()}</div>
                <br />
                <br />
                <div>Dear {addressee},</div>
                <br />
                <br />
                <div>It’s my absolute pleasure to recommend Omar Guerrero for Front-End Developer with Fleks.</div>
                <br />
                <div>I thoroughly enjoyed my time working with Omar, and came to know him as a truly valuable asset to absolutely any team. He is honest, dependable, and incredibly hard-working.</div>
                <br />
                <div>His knowledge of Web Development and expertise in Front-end was a huge advantage to our entire office. </div>
                <br />
                <div>Please feel free to contact me at XXX-XXX-XXXX should you like to discuss Omar’s qualifications and experience further. I’d be happy to expand on my recommendation.</div>
                <br />
                <br />
                <div>Sincerely {remitter}</div>
            </div>
        </div>
    )
}

export default LetterPreview