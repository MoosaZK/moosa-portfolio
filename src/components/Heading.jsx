import React from 'react'

function Heading(props) {
  return (
    <div className='relative'>

    <fieldset class="border-t-2 mb-5 border-darkGreen ">
        <legend class="mx-auto px-4 text-green text-3xl font-bold tracking-wider">{props.text}</legend>    
    </fieldset>
    </div>
  )
}

export default Heading;