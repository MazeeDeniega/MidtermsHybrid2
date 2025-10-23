import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { NavLink } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

const Navbar: React.FC = () => {
  return (
    <IonHeader>
      <IonToolbar className="bg-primary">
        <Container className="d-flex justify-content-between align-items-center">
          <IonTitle className="text-white m-0">ShopEase</IonTitle>

          <Nav>
            <NavLink to="/home" className="nav-link text-white mx-2">
              Home
            </NavLink>
            <NavLink to="/products" className="nav-link text-white mx-2">
              Products
            </NavLink>
            <NavLink to="/testimonials" className="nav-link text-white mx-2">
              Testimonials
            </NavLink>
            <NavLink to="/contact" className="nav-link text-white mx-2">
              Contact
            </NavLink>
          </Nav>
        </Container>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
