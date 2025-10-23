import { IonCard, IonCardContent, IonCardSubtitle } from '@ionic/react';

interface TestimonialProps {
  name: string;
  message: string;
}

const TestimonialItem: React.FC<TestimonialProps> = ({ name, message }) => (
  <IonCard className="m-2">
    <IonCardContent>
      <IonCardSubtitle>“{message}”</IonCardSubtitle>
      <p className="fw-bold text-end">– {name}</p>
    </IonCardContent>
  </IonCard>
);

export default TestimonialItem;
