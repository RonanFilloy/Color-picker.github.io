import React from 'react';

function PaletteFooter(props) {

    return (
        <footer className='Palette-footer'>
            {props.paletteName}
            <span className={`emoji fi fi-${props.emoji}`}>{props.isFlag ? '' : props.emoji}</span>
        </footer>
    )
}

export default PaletteFooter