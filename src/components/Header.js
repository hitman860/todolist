import React from 'react'

const Header = ({title,showhandle,changestyle}) => {
  return (
    <div className='header'>
        <h1>{title}</h1>
        <button className='btn'  style={changestyle?{color:'red'}:null} onClick={showhandle} >
          {changestyle?'close':'Add'} </button>
        </div>
  )
}

export default Header