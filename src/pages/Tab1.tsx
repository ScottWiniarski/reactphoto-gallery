import { useIonToast, IonModal, IonButtons, IonItemDivider, IonItemGroup, IonSearchbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList,IonButton, IonCol, IonGrid, IonRow, IonContent,
   IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
    import React, {useState} from 'react';
import {trashBin } from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import PageHeader  from '../components/PageHeader';
import './Tab1.css';


const Tab1: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  /*
  function passToModal(){


  }
  */
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Coupon added to order!',
      duration: 1500,
      position: position,
    });
  };

  const [coupons, setCoupons] = useState([
    { id: 0, 
      headline: "15% Off",
      subtext: "Entrees",
      description: "With orders totalling at or above $40, earn 15% off on each entree.",
    }, 
  ]);


  return (
    <IonPage>
      <PageHeader name="Specials"></PageHeader>
      <IonContent>
      <IonGrid fixed={true}>
        <IonRow>
        <IonCol size="12" size-md="6" size-lg="6">
          <IonList>
            <IonItemGroup>
              <IonItemDivider className='dividers'>
                <IonLabel>Main Courses</IonLabel>
              </IonItemDivider>
            </IonItemGroup>
            {coupons.map(coupon => {
              return (
                <IonCard key={coupon.id}>
                  <IonCardHeader>
                    <IonCardTitle>{coupon.headline}</IonCardTitle>
                    <IonCardSubtitle>{coupon.subtext}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>{coupon.description}</IonCardContent>
                  <IonButton expand='block' shape='round' onClick={ ()=> setIsOpen(true)}>Add It!</IonButton>
                </IonCard>
              )
            })}
   
            <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Modal</IonTitle>
              <IonButtons slot="end">
                <IonButton expand='block' shape='round' onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
            
            
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>20% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $60, earn 20% off on each entree.</IonCardContent>
              <IonButton expand='block' shape='round' onClick={() => presentToast('middle')}>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>10% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $30, earn 10% off on each entree.</IonCardContent>
              <IonButton expand='block' shape='round' size='default' onClick={() => presentToast('middle')}>Add It!</IonButton>
            </IonCard>
          </IonList>
        </IonCol>
      
        <IonCol size="12" size-md="6" size-lg="6" className='desserts'>
          <IonList>
          <IonItemGroup>
              <IonItemDivider className='dividers'>
                <IonLabel>Desserts and Specials</IonLabel>
              </IonItemDivider>
            </IonItemGroup>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Buy 1 Get 1</IonCardTitle>
                <IonCardSubtitle>Qualifying Desserts</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>With orders totalling at or above $30, get a free extra dessert.</IonCardContent>
                <IonButton expand='block' shape='round' onClick={() => presentToast('middle')}>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Free Carrot Cake</IonCardTitle>
                <IonCardSubtitle>Qualifying Desserts</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>With any order above $15, get a free slice of carrot cake.</IonCardContent>
                <IonButton expand='block' shape='round' onClick={() => presentToast('middle')}>Add It!</IonButton>
            </IonCard>
          </IonList>
        </IonCol>
          <IonCol size='12' size-md="6" size-lg="6">
            <IonList>
            <IonItemGroup>
              <IonItemDivider className='dividers'>
                <IonLabel>Limited Time Specials</IonLabel>
              </IonItemDivider>
            </IonItemGroup>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Extra Appetiser</IonCardTitle>
                  <IonCardSubtitle>Limited Time Offer!</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>With any order above $15, get a <code>free</code> appetiser of your choice.</IonCardContent>
                  <IonButton expand='block' shape='round' onClick={() => presentToast('middle')}>Add It!</IonButton>
              </IonCard>
            </IonList>
          </IonCol>
          
        </IonRow>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
