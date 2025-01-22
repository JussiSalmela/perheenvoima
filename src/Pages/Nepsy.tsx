import React from 'react'
import PageComponent from '../Components/PageComponent'

export default function Nepsy() {
   
   return (
      <PageComponent
         imageUrl="fishingCropped.png"
         // backgroundColor="#6a7775"
      >
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifySelf: 'center',
            // textAlign: 'center',
            maxWidth: '100vh'
         }}>
            <h2 style={{  }}>Nepsyohjaus</h2>
            <p style={{
               // width: '50%',
            }}>
               Ohjauksen avulla annetaan työkaluja arjessa toimimiseen neurokirjolla olevan lapsen kanssa. Ohjauksen turvin hankitaan tietoutta ja syitä neurokirjolla olevan lapsen käyttäytymiselle, tiedon lisääntymisen ja moninaisten työkalujen avulla lisätään arjen sujuvuutta. Ohjauksen toteuttaa vahvan neurokirjon osaamisen omaava sosiaalialan ammattilainen. Ohjausta voidaan toteuttaa myös päiväkodissa.
            </p>
         </div>
      </PageComponent>
   )
}
