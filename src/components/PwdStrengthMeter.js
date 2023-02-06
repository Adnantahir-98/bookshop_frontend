import React from 'react'
import zxcvbn from 'zxcvbn'


const PasswordStrengthMeter = ({ password }) => {

    const result = zxcvbn(password)
    const num = result.score * 100/4

    const PwdLabel = () => {
        switch(result.score){
            case 0:
                return 'Very weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Fair';
            case 3:
                return 'Good';
            case 4:
                return 'Strong';
            default:
                return 'none';
        }
    }

    const ProgressColor = () => {
        switch(result.score){
            case 0:
                return '#828282'
            case 1:
                return '#EA1111'
            case 2:
                return '#FFAD00'
            case 3:
                return '#9bc158'
            case 4:
                return '#00b500'
            default:
                return 'none';
        }
    }

    const ChangeColor = () => ({
        width: `${num}%`,
        background: ProgressColor(),
        height: '5px',
    })

    return(
        <>
            <div className='progress mt-1' style={{height: "5px"}}>
                <div className='progress-bar' style={ChangeColor()}></div>
            </div>
            <p style={{color: ProgressColor(), float:'right'}}>{PwdLabel()}</p>
        </>
    )
}

export default PasswordStrengthMeter
