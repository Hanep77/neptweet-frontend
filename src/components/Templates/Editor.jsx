import React from "react"

const Editor = ({ rows, setText, className, defaultValue }) => {
    const handleInput = (e) => {
        const target = e.target
        setText(target.value.split("\n"))
    }

    return (
        <textarea className={`${className} p-2 outline-none whitespace-pre-wrap overflow`}
            rows={rows} onKeyUp={handleInput} spellCheck="false" defaultValue={defaultValue}>
        </textarea>
    )
}

export default Editor
