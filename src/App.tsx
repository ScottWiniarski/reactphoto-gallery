import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';

import React, {useState, useEffect} from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle, star, restaurantOutline, cashOutline } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

interface Coupon {
  id: number,
  headline: string,
  subtitle: string,
  description: string,
}
/*
const allCoupons: Coupon[][] = [
  [

  ]
]

const [coupons, setCoupons] = useState<Coupon[]>([]);

useEffect(() => {
  let mutableCoupons = [
    {
      id: 1,
      name: "Main Courses",
      items: [
        {
          id: 1,
          title: "15% Off",
          subTitle: "Entrees",
          description: "With orders totalling at or above $40, earn 15% off on each entree." 
        }
      ]
    },
    {
      id: 2,
      name: "Appetisers",
      items: [
        {
          id: 1,
          title: "Extra Appetiser",
          subTitle: "Limited Time Offer!",
          description: "With any order above $15, get a free appetiser of your choice."
        }
      ]
    }
  ]
  //setCoupons(mutableCoupons);
}, []); 
*/

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={star} />
            <IonLabel>Specials</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={images} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={restaurantOutline} />
            <IonLabel>Main Menu</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon aria-hidden="true" icon={cashOutline} />
            <IonLabel>Orders</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
