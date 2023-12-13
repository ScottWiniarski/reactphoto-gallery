import React from 'react';
import { IonGrid, IonPage, IonMenu, IonMenuToggle, IonMenuButton, IonButton, IonIcon, IonCol, IonRow ,IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar} from "@ionic/react";
import {trashBin, reorderThreeOutline } from 'ionicons/icons';
import './PageHeader.css';

interface HeaderProps {
    name: string;
}

const PageHeader: React.FC<HeaderProps> = ({ name }) => {
    return (
    <IonHeader id="header">
      <IonRow>
      <IonCol size="5">
      <IonToolbar>
          <IonButton slot='start'>
              <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
              {name}
          </IonButton>  
        </IonToolbar>
      </IonCol>
      <IonCol size="7">
      <IonToolbar>
          <IonSearchbar slot="start" showCancelButton="focus" clearIcon={trashBin} placeholder="Search"></IonSearchbar>
      </IonToolbar>
      </IonCol>
      </IonRow>
  </IonHeader>
    )
};

export default PageHeader;