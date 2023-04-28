import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown
} from "react-bootstrap"
import Buttn from '../Button/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './Header.css'
import { link, NavLink } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import resumeData from '../../utils/resumeData';

const Header = (props) => {
    const pathName = props?.location?.pathname
    return(
        <Navbar expand='lg' sticky='top' className='header'>
            <Nav.Link as={NavLink} to='/'>
                <Navbar.Brand className='headerHome'>
                    <HomeIcon />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='headerLeft'>
                    <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'headerLinkActive': 'headerLink'}>
                        Resume
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/Portfolio' className={pathName === '/Portfolio' ? 'headerLinkActive': 'headerLink'}>
                        Portfolio
                    </Nav.Link>
                </Nav>

                <div className='headerRight'>
                    {Object.keys(resumeData.socials).map(key => (
                        <a href={resumeData.socials[key].link} target='blank'>{resumeData.socials[key].Icon}</a>
                    ))}
                    <Buttn text={'Hire Me'} icon={<PersonAddAltIcon />} className='headerButton' />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header