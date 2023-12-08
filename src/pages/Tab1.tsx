import { useIonToast, IonSearchbar, IonAccordion, IonAccordionGroup, IonItem, IonLabel, IonList,IonButton, IonCol, IonGrid, IonRow, IonContent,
   IonHeader, IonPage, IonTitle, IonToolbar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import {trashBin } from 'ionicons/icons'
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';




const Tab1: React.FC = () => {
  const [present] = useIonToast();

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Coupon added to order!',
      duration: 1500,
      position: position,
    });
  };


  return (
    <IonPage>
      <IonHeader id="header">
        <IonToolbar>
          <IonTitle className='specialTitle'>Special Deals and Coupons</IonTitle>
        </IonToolbar>
        <IonToolbar>
        <IonSearchbar showCancelButton="focus" clearIcon={trashBin} placeholder="Search Coupons"></IonSearchbar>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonGrid fixed={true}>
        <IonRow>
        <IonCol size="6" size-md="4" size-lg="4">
          <IonList>
          <IonItem slot='header' color="warning">
              <IonLabel>Main Courses</IonLabel>
            </IonItem>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>15% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $40, earn 15% off on each entree.</IonCardContent>
              <IonButton onClick={() => presentToast('middle')}>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>20% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $60, earn 20% off on each entree.</IonCardContent>
              <IonButton onClick={() => presentToast('top')}>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>10% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $30, earn 10% off on each entree.</IonCardContent>
              <IonButton onClick={() => presentToast('bottom')}>Add It!</IonButton>
            </IonCard>
          </IonList>
        </IonCol>
       
        <IonCol size="6" size-md="4" size-lg="4">
          <IonList>
            <IonItem slot='header' color="warning">
              <IonLabel>Desserts and Specials</IonLabel>
            </IonItem>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Buy 1 Get 1</IonCardTitle>
                <IonCardSubtitle>Qualifying Desserts</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>With orders totalling at or above $30, get a free extra dessert.</IonCardContent>
                <IonButton onClick={() => presentToast('top')}>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Free Carrot Cake</IonCardTitle>
                <IonCardSubtitle>Qualifying Desserts</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>With any order above $15, get a free slice of carrot cake.</IonCardContent>
                <IonButton onClick={() => presentToast('top')}>Add It!</IonButton>
            </IonCard>
          </IonList>
        </IonCol>
          <IonCol size='6' size-md="4" size-lg="4">
            <IonList>
            <IonItem slot='header' color="warning">
              <IonLabel>Limited Time Specials</IonLabel>
            </IonItem>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Extra Appetiser</IonCardTitle>
                  <IonCardSubtitle>Limited Time Offer!</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>With any order above $15, get a <code>free</code> appetiser of your choice.</IonCardContent>
                  <IonButton onClick={() => presentToast('top')}>Add It!</IonButton>
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
