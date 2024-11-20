import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar className="bg-info">
    <Container>
      <Navbar.Brand >
      
     <Link to={'/'} className='text-white fw-bold' style={{textDecoration:'none',fontSize:'28px'}}>
          <i class="fa-solid fa-music"></i> &nbsp;
          
            Media Player
     </Link>
      </Navbar.Brand>
    </Container>
  </Navbar>
  )
}

export default Header