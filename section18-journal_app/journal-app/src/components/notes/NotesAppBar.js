import React from 'react'

export const NotesAppBar = () => {
    const date = new Date();
    return (
        <div className="notes__appbar">
            <span>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn">
                    Save
                </button>
            </div>
        </div>
    )
}
