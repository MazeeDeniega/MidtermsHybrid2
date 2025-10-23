import { IonPage, IonContent } from '@ionic/react';
import Navbar from '../components/Navbar';
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <IonPage>
      <Navbar />
      <IonContent fullscreen className="bg-dark text-light">
        <Container className="py-5">
          <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
          <p className="text-center mb-5">
            Have questions, feedback, or just want to say hi? Fill out the form below!
          </p>

          <Form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '600px' }}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label className="text-light">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary text-light border-0"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label className="text-light">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary text-light border-0"
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label className="text-light">Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-secondary text-light border-0"
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" variant="primary" size="lg">
                Send Message
              </Button>
            </div>

            {submitted && (
              <div className="text-success text-center mt-4 fw-bold">
                ✅ Thank you! Your message has been sent.
              </div>
            )}
          </Form>
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Contact;
