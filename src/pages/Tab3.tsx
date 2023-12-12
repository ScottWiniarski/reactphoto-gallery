import { IonNote, IonButtons, IonCheckbox, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList,
  IonThumbnail, IonAccordion, IonAccordionGroup,IonItem, IonLabel, IonModal,
  IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInfiniteScrollContent } from '@ionic/react';
import React, {useRef, useEffect, useState} from 'react';  
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import PageHeader from '../components/PageHeader';
import hamburger from '../assets/hamburger.jpg';
import spaghetti from '../assets/spaghetti.jpg';
import legofmutton from '../assets/legofmutton.jpg';
import krinklefries from '../assets/krinklefries.jpg';
import twisterfries from '../assets/twisterfries.jpg';
import chickenstrips from '../assets/chickenstrips.jpg';

const Tab3: React.FC = () => {

  let burgerImage = hamburger;
  let sphagettiImage = spaghetti;
  let legOfMuttonImage = legofmutton;
  let fryImage = krinklefries;
  let chickenStripImage =  chickenstrips;
  let seasonedFriesImage = twisterfries;

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
      imgAlt: "Picture of a Hamburger",
      imageSrc: burgerImage,
      headline: "Build a Burger",
      description: "Freely choose your own toppings with one of our 1/3 pound beef patties.",
      price: 10.99,
    },
    { id: 1, 
      imgAlt: "Silhouette of mountains",
      imageSrc: sphagettiImage,
      headline: "Spaghetti and Meatballs",
      description: "Enjoy a bowl of freshly made noodles, adorned with grilled meatballs and covered in our homemade sauce.",
      price: 12.99,
    },
    { id: 2,
      imgAlt: "Silhouette of mountains",
      imageSrc: legOfMuttonImage, 
      headline: "Leg of Beast",
      description: "To be honest, we're not sure what animal this actually came from.",
      price: 14.99,
    },
    { id: 3,
      imgAlt: "Image of a hamburger",
      imageSrc: burgerImage, 
      headline: "Build a Burger",
      description: "Freely choose your own toppings with one of our 1/3 pound beef patties.",
      price: 10.99,
    },
    { id: 4, 
      imgAlt: "Silhouette of mountains",
      imageSrc: sphagettiImage,
      headline: "Gluten Free Spaghetti and Meatballs",
      description: "Enjoy a bowl of freshly made noodles, adorned with grilled meatballs and covered in our homemade sauce.",
      price: 12.99,
    },
    { id: 5,
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
      imageSrc: fryImage, 
      headline: "Bag of Fries",
      description: "Salted, get yourself a hefty helping of our krinkle-cut fries.",
      price: 7.99,
    },
    { id: 1, 
      imgAlt: "Silhouette of mountains",
      imageSrc: seasonedFriesImage,
      headline: "Seasoned Twisters",
      description: "Silly fries, seasoned with our own blend, grab a bag while you can.",
      price: 9.99,
    },
    { id: 2,
      imgAlt: "Silhouette of mountains",
      imageSrc: chickenStripImage, 
      headline: "Chicken Strips",
      description: "After a few unpleasant experiences, we don't call them tenders anymore.",
      price: 11.99,
    },
    { id: 3,
      imgAlt: "Silhouette of mountains",
      imageSrc: fryImage, 
      headline: "Bag of Fries",
      description: "Non-salted, get yourself a hefty helping of our krinkle-cut fries.",
      price: 7.99,
    },
    { id: 4, 
      imgAlt: "Silhouette of mountains",
      imageSrc: seasonedFriesImage,
      headline: "Seasoned Twisters",
      description: "Silly fries, seasoned with our own blend, grab a bag while you can.",
      price: 9.99,
    },
    { id: 5,
      imgAlt: "Silhouette of mountains",
      imageSrc: chickenStripImage, 
      headline: "Chicken Strips",
      description: "After a few unpleasant experiences, we don't call them tenders anymore.",
      price: 11.99,
    },
  ]);

  return (
    <IonPage>
      <PageHeader name="Main Menu"></PageHeader>    
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Main Courses:</IonCardTitle>
            <IonCardSubtitle>Can be upgraded into baskets or combo meals.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonList inset={true} lines='none'>
            {mainCourses.map(main => {
              return (
                <IonItem key={main.id}>
                  <IonThumbnail slot='start'>
                    <img alt={main.imgAlt} src={main.imageSrc}></img>
                  </IonThumbnail>
                  <IonLabel class="ion-text-wrap">
                    <h2>{main.headline}</h2>
                    <p>{main.description}
                    <br></br>
                    <strong>${main.price}</strong>
                    </p>
                  </IonLabel>
                  <IonButton slot='end'>Add It!</IonButton>
                </IonItem>
              )
            })}
          </IonList>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Appetizers:</IonCardTitle>
            <IonCardSubtitle>To settle a snack or add to a meal.</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonList inset={true} lines='none'>
            {appetisers.map(apps => {
              return (
                <IonItem key={apps.id}>
                  <IonThumbnail slot='start'>
                    <img alt={apps.imgAlt} src={apps.imageSrc}></img>
                  </IonThumbnail>
                  <IonLabel class="ion-text-wrap">
                    <h2>{apps.headline}</h2>
                    <p>{apps.description}
                    <br></br>
                    <strong>${apps.price}</strong>
                    </p>
                  </IonLabel>
                  <IonButton id='open-modal'>Add It!</IonButton>
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
