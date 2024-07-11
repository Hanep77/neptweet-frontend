import React from "react"

const Editor = ({ rows, setWords, className }) => {
    const handleInput = (e) => {
        const target = e.target
        setWords(target.value.split("\n"))
    }

    return (
        <textarea className={`${className} p-2 outline-none whitespace-pre-wrap overflow`}
            rows={rows} onKeyUp={handleInput} spellCheck="false">
        </textarea>
    )
}

export default Editor
