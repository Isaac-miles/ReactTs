import React from 'react'

function Heading({title}:{title:string}) {
  return (
    <>
    <h1 title='header'>{title}</h1>
    <h3 data-testid='header-2'>Test</h3>
    </>
  )
}

export default Heading