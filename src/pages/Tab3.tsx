import { IonNote, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList,
  IonThumbnail, IonAccordion, IonAccordionGroup,IonItem, IonLabel, 
  IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, {useRef, useEffect, useState} from 'react';  
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import PageHeader from '../components/PageHeader';

const Tab3: React.FC = () => {
  type menuItem = {
    id: number,
    imgAlt: string
    imageSrc: string,
    headline: string,
    description: string,
    price: number,
  }

  const [mainCourses, setMainCourses] = useState([
    { id: 0,
      imgAlt: "Silhouette of mountains",
      imageSrc: "https://ionicframework.com/docs/img/demos/thumbnail.svg", 
      headline: "Build a Burger",
      description: "Freely choose your own toppings with one of our 1/3 pound beef patties.",
      price: 10.99,
    },
    { id: 1, 
      imgAlt: "Silhouette of mountains",
      imageSrc: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      headline: "Spaghetti and Meatballs",
      description: "Enjoy a bowl of freshly made noodles, adorned with grilled meatballs and covered in our homemade sauce.",
      price: 12.99,
    },
    { id: 2,
      imgAlt: "Silhouette of mountains",
      imageSrc: "https://ionicframework.com/docs/img/demos/thumbnail.svg", 
      headline: "Leg of Beast",
      description: "To be honest, we're not sure what animal this actually came from.",
      price: 14.99,
    },
  ]);

  const [appetisers, setAppetisers] = useState([
    { id: 0,
      imgAlt: "Silhouette of mountains",
      imageSrc: "https://ionicframework.com/docs/img/demos/thumbnail.svg", 
      headline: "Bag of Fries",
      description: "Salted or not, get yourself a hefty helping of our krinkle-cut fries.",
      price: 7.99,
    },
    { id: 1, 
      imgAlt: "Silhouette of mountains",
      imageSrc: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
      headline: "Seasoned Twisters",
      description: "Silly fries, seasoned with our own blend, grab a bag while you can.",
      price: 9.99,
    },
    { id: 2,
      imgAlt: "Silhouette of mountains",
      imageSrc: "https://ionicframework.com/docs/img/demos/thumbnail.svg", 
      headline: "Chicken Strips",
      description: "After a few unpleasant experiences, we don't call them tenders anymore.",
      price: 11.99,
    },
  ]);

  return (
    <IonPage>
      <PageHeader name="Our Menu"></PageHeader>
      
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Main Courses:</IonCardTitle>
            <IonCardSubtitle>Can be upgraded into baskets or combo meals.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonList>
            {mainCourses.map(main => {
              return (
                <IonItem key={main.id}>
                  <IonThumbnail slot='start'>
                    <img alt={main.imgAlt} src={main.imageSrc}></img>
                  </IonThumbnail>
                  <IonLabel class="ion-text-wrap">
                    <h1>{main.headline}</h1>
                    <p>{main.description}
                    <br></br>
                    <strong>${main.price}</strong>
                    </p>
                  </IonLabel>
                  <IonButton>Add It!</IonButton>
                </IonItem>
              )
            })}
          </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Appetisers:</IonCardTitle>
            <IonCardSubtitle>To settle a snack or add to a meal.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonList>
            {appetisers.map(apps => {
              return (
                <IonItem key={apps.id}>
                  <IonThumbnail slot='start'>
                    <img alt={apps.imgAlt} src={apps.imageSrc}></img>
                  </IonThumbnail>
                  <IonLabel class="ion-text-wrap">
                    <h1>{apps.headline}</h1>
                    <p>{apps.description}
                    <br></br>
                    <strong>${apps.price}</strong>
                    </p>
                  </IonLabel>
                  <IonButton>Add It!</IonButton>
                </IonItem>
              )
            })}
          </IonList>
          </IonCardContent>
        </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
