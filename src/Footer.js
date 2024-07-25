import React from 'react'

const Footer = ({length}) => {
    const year=new Date();
  return (
    <footer>
        <p style={{textAlign:"center"}}>{length} list of {length<=1?"item":"items"}</p>
        Copyright &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer