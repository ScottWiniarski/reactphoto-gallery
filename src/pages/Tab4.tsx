import { IonNote, IonButtons, IonCheckbox, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList,
    IonThumbnail, IonAccordion, IonAccordionGroup,IonItem, IonLabel, IonModal,
    IonContent, IonFooter, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInfiniteScrollContent, IonItemDivider } from '@ionic/react';
 

import React, {useRef, useEffect, useState} from 'react';
import  './Tab4.css'; 

import PageHeader from '../components/PageHeader';
import hamburger from '../assets/hamburger.jpg';
import spaghetti from '../assets/spaghetti.jpg';
import legofmutton from '../assets/legofmutton.jpg';
import krinklefries from '../assets/krinklefries.jpg';
import twisterfries from '../assets/twisterfries.jpg';
import chickenstrips from '../assets/chickenstrips.jpg';



const Tab4: React.FC = () => {
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
      };

    const [orders, setOrders] = useState([
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
          imageSrc: legOfMuttonImage, 
          headline: "Leg of Beast",
          description: "To be honest, we're not sure what animal this actually came from.",
          price: 14.99,
        },
      ]);

      const getOrderTotal = () => {
        let orderTotal = 0;
        orders.forEach(order => {
            orderTotal += order.price
        });
        orderTotal += 6.83;
        return orderTotal.toFixed(2);
        };

        const getSubTotal = () => {
            let orderTotal = 0;
            orders.forEach(order => {
                orderTotal += order.price
            });
            return orderTotal.toFixed(2);
            };

    return (
    <IonPage>
      <PageHeader name="Orders"></PageHeader>    
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Current Order:</IonCardTitle>
            <IonCardSubtitle>We love repeat customers!</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          <IonList inset={true} lines='none'>
            {orders.map(main => {
              return (
                <IonItem key={main.id}>
                  <IonThumbnail slot='start'>
                    <img alt={main.imgAlt} src={main.imageSrc}></img>
                  </IonThumbnail>
                  <IonLabel class="ion-text-wrap">
                    <h2>{main.headline}</h2>
                  </IonLabel>
                  <IonLabel color={'dark'} slot='end'><strong>${main.price}</strong></IonLabel>
                </IonItem>
              )
            })}
            
            <IonItem>
                <IonItemDivider color={'light'}>SubTotal: ${getSubTotal()}</IonItemDivider>
            </IonItem>
            
            <IonItem>
                <IonItemDivider className='taxation' color={'light'}>Tax Applied: $6.83</IonItemDivider>
            </IonItem>
            
            <IonItemDivider className='totals' slot='end'>Grand Total: ${getOrderTotal()}
              <IonButton slot='end' color={'success'}>Check Out</IonButton>
            </IonItemDivider>
          </IonList>
          
          </IonCardContent>
        </IonCard>
        </IonContent>
        </IonPage>
    );
};

export default Tab4;

