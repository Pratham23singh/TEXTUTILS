import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = (() => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase!', 'success')
    })

    const handleLoClicked = (() => {
        let newTxt = text.toLowerCase()
        setText(newTxt)
        props.showAlert('Converted to LowerCase!', 'success')
        
    })

    const handleClearTxt = (() => {
        let cleartxt = (' ');
        setText(cleartxt)
        props.showAlert('Clear Text!', 'success')

    })

    const handleReverseTxt = (() => {
        let reverseTxt = text.split('').reverse().join('')
        setText(reverseTxt)
        props.showAlert('Text Reversed !', 'success')

    })

    const handleCopyTxt = (() => {
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied !', 'success')
    })

    const handleTrimTxt = (() => {
        let trimTxt = text.trim()
        setText(trimTxt)
    })

    const handleOnChange = ((event) => {
        console.log('yeh! it also running');
        setText(event.target.value);
    })

    const [text, setText] = useState(''); // This syntaxx is very main 
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h4 className='my-2'>{props.h4}</h4>
                <div className="mb-5 my-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} placeholder="Write something here" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} ></textarea><br></br>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>toUpperCase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClicked}>toLowerCase</button>
                    <button disabled={text.length === 0} className='btn btn-danger mx-1 my-1' onClick={handleClearTxt}>Clear text</button>
                    <button disabled={text.length === 0} className='btn btn-success mx-1 my-1' onClick={handleReverseTxt}>Reverse text</button>
                    <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1' onClick={handleCopyTxt}>Copy text</button>
                    <button disabled={text.length === 0} className='btn btn-warning mx-1 my-1' onClick={handleTrimTxt}>Remove Space</button>
                    <h3 className='my-2'>{props.h3}</h3>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} word and {text.length} characters<br></br>
                    It takes {0.008 * text.split(' ').filter((element) => { return element.length !== 0 }).length}length Minutes to Read
                    <h5>Preview</h5>
                    <p>{text.length > 0 ? text : "Enter something in the textBox to preview it here"}</p>
                </div>
            </div >
        </>
    )
}
