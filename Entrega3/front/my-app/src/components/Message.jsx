import React from 'react'

const Message = ({msg, bgColor}) => {
  let styles = {
    padding: "0.5rem 2rem",
    borderRadius: "0.5rem",
    margin: "1rem",
    textAlign: "center",
    backgroundColor: bgColor,
    color: "#fff",
    fontWeight: "bold"
  }
  return (
    <div style={styles}>
        {/* <p>{msg}</p> */}
        <p dangerouslySetInnerHTML={{ __html: msg }}/>
    </div>
  )
}

export default Message