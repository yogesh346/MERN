import React from 'react'
import '../Display/Display.css';
import Input from '../../container/Input';
function Contact() {
  return (
  <div className='container'>
  <div><h1>CONTACT FORM</h1></div>
  <form>
  <Input type="text" placeholder="Enter name" />
  <input type="text" placeholder="Enter Contact" />
  <Input type="text" placeholder="Enter City" />
  <Input type="submit" />
  </form>
  </div>
  )
}

export default Contact
