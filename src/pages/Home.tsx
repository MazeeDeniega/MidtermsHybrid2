import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import { Container, Button } from 'react-bootstrap';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen>
        <Container className="text-center mt-5">
          <h1 className="fw-bold">Welcome to ShopEase</h1>
          <p className="mt-3 fs-5">
            Discover our latest products and amazing deals. Quality items at unbeatable prices.
          </p>

          <div className="d-flex justify-content-center mb-4">
            <img
              src="https://picsum.photos/id/180/800/400"
              alt="Featured Product"
              className="img-fluid rounded shadow-lg"
              style={{
                maxWidth: '80%',
                height: 'auto',
              }}
            />
          </div>

          <Button href="/products" variant="primary" size="lg">
            Browse Products
          </Button>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Home;
