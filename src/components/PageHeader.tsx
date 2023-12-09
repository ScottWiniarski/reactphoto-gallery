import {IonContent, IonHeader, IonToolbar, IonTitle, IonSearchbar} from "@ionic/react";
import {trashBin } from 'ionicons/icons';

interface HeaderProps {
    name: string;
}

const PageHeader: React.FC<HeaderProps> = ({ name }) => {
    return (
        <IonHeader id="header">
            <IonToolbar>
                <IonTitle>{name}</IonTitle>
            </IonToolbar>
            <IonToolbar>
                <IonSearchbar showCancelButton="focus" clearIcon={trashBin} placeholder="Click to Search"></IonSearchbar>
            </IonToolbar>
        </IonHeader>  
    )
};

export default PageHeader;