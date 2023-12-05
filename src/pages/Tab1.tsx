import { IonLabel, IonList,IonButton, IonCol, IonGrid, IonRow, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';




const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='SpecialTitle'>Special Deals</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonGrid fixed={true}>
        <IonRow>
          <IonLabel>Main Courses</IonLabel>
        <IonCol size="6" size-md="4" size-lg="4">
          <IonList>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>15% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $40, earn 15% off on each entree.</IonCardContent>
              <IonButton>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>20% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $60, earn 20% off on each entree.</IonCardContent>
              <IonButton>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>10% Off</IonCardTitle>
                <IonCardSubtitle>Entrees</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>With orders totalling at or above $30, earn 10% off on each entree.</IonCardContent>
              <IonButton>Add It!</IonButton>
            </IonCard>
          </IonList>
        </IonCol>
       
        <IonCol size="6" size-md="4" size-lg="4">
          <IonList>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Buy 1 Get 1</IonCardTitle>
                <IonCardSubtitle>Qualifying Desserts</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>With orders totalling at or above $30, get a free extra dessert.</IonCardContent>
                <IonButton>Add It!</IonButton>
            </IonCard>
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>Free </IonCardTitle>
                <IonCardSubtitle>Qualifying Desserts</IonCardSubtitle>
              </IonCardHeader>
                <IonCardContent>With orders totalling at or above $30, get a free extra dessert.</IonCardContent>
                <IonButton>Add It!</IonButton>
            </IonCard>
          </IonList>
        </IonCol>
          <IonCol size='6' size-md="4" size-lg="4">
            <IonList>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>Extra Appetiser</IonCardTitle>
                  <IonCardSubtitle>Limited Time Offer!</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>With any order above $15, get a <code>free</code> appetiser of your choice.</IonCardContent>
                  <IonButton>Add It!</IonButton>
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
