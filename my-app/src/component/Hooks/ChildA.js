import {React, memo}from 'react'

function ChildA() {
    console.log("Child component")
  return (
    <div>
      
    </div>
  )
}
export default memo (ChildA);
