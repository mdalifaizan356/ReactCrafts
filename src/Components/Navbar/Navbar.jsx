import React from 'react'
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className='row border-success'>
          <div className='col'>
            <nav className="nav"> 
            <h6>Single Page Applications</h6>
                <ul>
                    <li><Link to = {'/counter'} className='navlink'>Counter</Link></li>
                    <li><Link to = {'/itemlist'} className='navlink'>Item List</Link></li>
                    <li><Link to = {'/showinput'} className='navlink'>Show Input</Link></li>
                    <li><Link to = {'/toggleswitch'} className='navlink'>Toggle Switch</Link></li>
                    <li><Link to = {'/expencetraker'} className='navlink'>Expence Traker</Link></li>
                </ul>
            </nav>
          </div>
        </div>
    </>
  )
}

export default Navbar