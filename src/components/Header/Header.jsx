import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
} from 'mdb-react-ui-kit';
function Header() {
  return (
    <div>
        <MDBNavbar bgColor='primary'>
                <MDBContainer>
                    <MDBNavbarBrand href='/Home'>
                        <img
                            src='https://i.pinimg.com/1200x/f8/8a/99/f88a994da31c4e6bf4fcb652460f9ec8.jpg'
                            height='40'
                            alt=''
                            loading='lazy'
                        />
                        <p className='my-2 mx-2 '>METUBE</p>
                    </MDBNavbarBrand>
                </MDBContainer>
            </MDBNavbar>
    </div>
  )
}

export default Header