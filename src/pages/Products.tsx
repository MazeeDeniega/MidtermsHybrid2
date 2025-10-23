import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const Products: React.FC = () => {
  // ✅ Define your data locally
  const products = [
    {
      name: 'Product A',
      price: 49.99,
      image: 'https://picsum.photos/id/100/300/200',
    },
    {
      name: 'Product B',
      price: 79.99,
      image: 'https://picsum.photos/id/101/300/200',
    },
    {
      name: 'Product C',
      price: 99.99,
      image: 'https://picsum.photos/id/102/300/200',
    },
  ];

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen>
        <Container className="mt-4">
          <h2 className="text-center mb-4">Our Products</h2>
          <Row>
            {products.map((p, index) => (
              <Col key={index} md={4} className="mb-4">
                <ProductCard name={p.name} price={p.price} image={p.image} />
              </Col>
            ))}
          </Row>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Products;
