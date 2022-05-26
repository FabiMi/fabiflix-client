import React from 'react';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
export function Menubar({User}){
    const onLoggedOut = () => {
        localStorage.clear();
        window.open("/", "self");
    }
}

const isAuth = () => {
    if(typeof window == "undefined") {
        return false;
    }
    if(localStorage.getItem("token")){
        return localSrorage.getItem("token");
    } else {
        return false;
    }
};
return (
    <Navbar className="main-nav" sticky="top" bg="dark" expand="lg" variant="dark">
        <Container>
            <Navbar.Brand classNAme="navbar-logo" href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="respnsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">{isAuth() && ( <Nav.Link href={'users/${user}'}>{user}</Nav.Link>
                    )}
                    {isAuth() && (
                        <Button variant ="link" onClick={()=> {this.onLoggedOut()}}>Logout</Button>
                        )}
                    {!isAuth() && ( <Nav.Link href="/"></Nav.Link>
                    )}
                    {!isAuth() && ( <Nav.Link href="/register">Sign-up</Nav.Link>
                    )}

                </Nav>

                
                </Navbar.Collapse>
        </Container>
    </Navbar>
);
}