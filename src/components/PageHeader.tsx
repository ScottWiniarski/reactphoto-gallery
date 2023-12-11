import { IonGrid, IonCol, IonRow ,IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar} from "@ionic/react";
import {trashBin } from 'ionicons/icons';

interface HeaderProps {
    name: string;
}

const PageHeader: React.FC<HeaderProps> = ({ name }) => {
    return (
        <IonHeader id="header">
            <IonRow>
            <IonCol size="4">
            <IonToolbar>
                <IonTitle slot="start">{name}</IonTitle>
            </IonToolbar>
            </IonCol>
            <IonCol size="8">
            <IonToolbar>
                <IonSearchbar slot="start" showCancelButton="focus" clearIcon={trashBin} placeholder="Search"></IonSearchbar>
            </IonToolbar>
            </IonCol>
            </IonRow>
        </IonHeader>  
    )
};

export default PageHeader;