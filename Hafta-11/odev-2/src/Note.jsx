import React from 'react';

function Note({ text, color }) {
    return (
        <div className="note" style={{ backgroundColor: color }}>
            {text}
        </div>
    );
}

export default Note;
