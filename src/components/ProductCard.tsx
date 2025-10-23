import { IonCard, IonCardContent, IonCardTitle, IonButton } from '@ionic/react';
import { useState } from 'react';

interface ProductProps {
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductProps> = ({ name, price, image }) => {
  const [liked, setLiked] = useState(false);

  return (
    <IonCard className="m-2 text-center">
      <img src={image} alt={name} className="img-fluid" />
      <IonCardContent>
        <IonCardTitle>{name}</IonCardTitle>
        <p>{price}</p>
        <IonButton>Buy Now
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default ProductCard;
