import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import TestimonialItem from '../components/TestimonialItem';
import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState([
    { name: 'Alice', message: 'Fantastic quality and service!' },
    { name: 'Bob', message: 'Always great deals and fast delivery!' },
  ]);

  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const addTestimonial = () => {
    if (newName && newMessage) {
      setTestimonials([...testimonials, { name: newName, message: newMessage }]);
      setNewName('');
      setNewMessage('');
    }
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen>
        <Container className="mt-4">
          <h2 className="text-center mb-4">What Our Customers Say</h2>

          {testimonials.map((t, i) => (
            <TestimonialItem key={i} name={t.name} message={t.message} />
          ))}

          <Form className="mt-4">
            <Form.Group>
              <Form.Label>Your Name</Form.Label>
              <Form.Control value={newName} onChange={(e) => setNewName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mt-2">
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
            </Form.Group>

            <Button className="mt-3" onClick={addTestimonial}>Add Testimonial</Button>
          </Form>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Testimonials;
