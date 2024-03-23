import './bmi.css'
import React, { useState } from 'react'
const Bmi = () => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState(null)
    const [bmistatus, setBmistatus] = useState("")
    const [errorMessage, setErrorMessage] = useState('')

     
    const calculatebmi = () => {
        const isValidHeight = /^\d+$/.test(height)
        const isValidWeight = /^\d+$/.test(weight)

        if (isValidHeight && isValidWeight) {
            const heightInmeters = height / 100
            const bmivalue = weight / (heightInmeters * heightInmeters)
            setBmi(bmivalue.toFixed(2))
            if (bmivalue < 18.5) {
                setBmistatus('underweight')
            } else if (bmivalue < 25 && bmivalue < 29.9) {
                setBmistatus('overrweight')
            } else {
                setBmistatus('obesity')
            }
            setErrorMessage('')
        } else {
            setBmi(null)
            setBmistatus('')
            setErrorMessage('please enter the numeric value height and weight')
        }
    }
    const clearall=()=>{
        setHeight("")
        setWeight("")
        setBmi(null)
        setBmistatus('')
    }
    return (
        <>
            <div className="container">
                <div className="box"></div>
                <div className="data">
                    <h1>BMI calculator</h1>
                   {errorMessage && (<p className='error'>{errorMessage}</p>)}

                    <div className="input-container">
                        <label htmlFor='height'>Height (cm):</label>
                        <input type='text' id='height' value={height} onChange={(e) =>
                            setHeight(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <label htmlFor='weight'>Weight (Kg):</label>
                        <input type='text' id='weight' value={weight} onChange={(e) =>
                            setWeight(e.target.value)} />
                    </div>
                    <button onClick={calculatebmi}>calculate</button>
                    <button onClick={clearall}>clear</button>
                    {bmi !== null && (<div className="result">
                        <p>your BMI is: {bmi}</p>
                        <p>status: {bmistatus}</p>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Bmi