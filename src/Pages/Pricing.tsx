import React from 'react'
import PageComponent from '../Components/PageComponent'

export default function Pricing() {
   return (
      <PageComponent
         imageUrl="fishingCropped.png"
      >
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifySelf: 'center',
            // textAlign: 'center',
            maxWidth: '100vh'
         }}>
            <h2>Palvelut ja hinnasto</h2>
            <h3>Ratkaisukeskeinen valmennus perheille</h3>
            <p>
               lähivalmennus 60 min 85€<br/>
               lähivalmennus 4 x 60 min 300€<br/>
               <li>lisätunnit neljän kerran jälkeen 75€/h</li><br/>

               etävalmennus 60 min 75€<br/>
               etävalmennus 4 x 60 min 250€ (suosituin)<br/>
               <li>lisätunnit neljän kerran jälkeen 65€/h</li><br/>
            </p>
            <h3>Lastenhoitoapu itsemaksaville asiakkaille</h3>
            <p>
               Arkisin 44 € / h sis. alv 25,5 %<br/>
               Viikonloppuisin 50 € / h sis. alv 25,5 %<br/>
               Kilometrikorvaus tarvittaessa 0,50 € / km + alv
            </p>
            <p style={{fontWeight: 'bold'}}>
               Hinnat sisältävät alv 25,5%
            </p>
         </div>
      </PageComponent>
   )
}
