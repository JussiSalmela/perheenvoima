import React from 'react'
import PageComponent from '../Components/PageComponent'

export default function Info() {

   return (
      <PageComponent
         imageUrl="familyCropped.png"
      >
         <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifySelf: 'center',
            // textAlign: 'center',
            maxWidth: '100vh'
         }}>
            <h2>Tietoa minusta</h2>
            <p>
               Hei! Olen Pia Laine. Yritykseni Perheenvoima tarjoaa tukea perhe arjen hyvinvoinnin vahvistamiseen.  Koulutukseltani olen sosionomi, lisäksi olen suorittanut kasvatusalan lisäopinnot. Olen työskennellyt kieli,- ja kulttuuriopettajana sekä erityisopettajana. Erityisopettajana olen pysähtynyt pohtimaan perspektiivejä lasten hyvinvoinnin tukemiseen ja uskon että kaikkein merkityksellisintä on tukea perheitä sujuvan ja onnellisen arjen luomisessa. Palkitsevinta on työskentely lasten, nuorten sekä heidän perheidensä kanssa. Olen työskennellyt paljon neurokirjon lasten parissa, käyttäen erityispedagogisia menetelmiä. Löydetään yhdessä ne parhaimmat keinot jotka tukee just teidän perhettä. Perheiden voimavarojen ja vahvuuksien löytäminen ja vahvistaminen kuuluu työskentely tapoihini. Tarjoan myös päiväkoteihin ohjausta erityispedagogisiin menetelmiin. Työskentelen myös ruotsin ja englannin kielellä.
            </p>
         </div>
      </PageComponent>
   )
}
