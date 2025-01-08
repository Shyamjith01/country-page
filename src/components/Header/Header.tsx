import { useState } from "react";
import { useDispatch } from 'react-redux';
import { setCountryContinent } from '../../store/store';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";

const Header = () => {
    const [selectedItem, setSelectedItem] = useState<string>('All');
    const dispatch = useDispatch();

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
        dispatch(setCountryContinent(item));
    };
    return (
        <Navbar expand="lg" className=" ">
            <div className="d-flex justify-space-between justify-content-between w-100">

                <a className="navbar-brand fw-bold" href="#">Countries</a> 
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{paddingRight:"20px"}} className="me-auto d-flex justify-content-end   flex-row w-100 gap-5">
                        <ul className="navbar-nav d-flex flex-row gap-3">
                            {['All', 'Asia', 'Europe'].map((item) => (
                                <li className={`nav-item ${selectedItem === item ? 'active-item' : ''}`} key={item}>
                                    <a
                                        href="#"
                                        className="nav-link fw-bold"
                                        style={{
                                            color: selectedItem === item ? 'black' : '#8B8B8B',
                                        }}
                                        onClick={() => handleItemClick(item)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </div>
        </Navbar>
    )
}

export default Header
