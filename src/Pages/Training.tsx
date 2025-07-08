import PageComponent from '../Components/PageComponent'

export default function Training() {

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

            <h2>Mitä ratkaisukeskeinen perhevalmennus on?</h2>
            <p>Ratkaisukeskeinen perhe valmennus on toimintamuoto, jonka avulla valmentaja ja valmennettava perhe yhdessä pyrkivät kohti perheen tavoitetta. Yhteistyössä valmentajan kanssa kartoitetaan perheen nykytilanne, asetetaan saavutettavissa oleva tavoite ja laaditaan toimintasuunnitelma, jonka avulla asetettu tavoite saavutetaan.
               Valmentajan tehtävä on auttaa perhettä oivaltamaan omannäköiset ratkaisut, jotka tuottavat muutoksia perheen elämään. Annan työkaluja sujuvan arjen luomiseen. </p>
            <h4>Valmennuksen hyödyt: </h4>
            <div style={{ marginBottom: 40 }}>
               <p>
                  <li>Vanhemmuus taidot vahvistuu</li>
                  <li>Erityispedagogisia menetelmiä arkeen</li>
                  <li>Kodin arjen ja arkirutiinien hallinta vahvistuu</li>
                  <li>Perheen voimavarojen vahvistamista</li>
                  <li>Perheen vuorovaikutustaitojen tukemista ja sosiaalisten verkostojen laajentamista</li>
                  <li>Työkaluja arjessa toimimiseen neurokirjolla olevan lapsen kanssa</li>
               </p>
            </div>
            <p style={{fontWeight: 'bold'}}> Mietitkö, voisiko ratkaisukeskeinen perhe valmennus olla teidän juttu? Varaa ilmainen 20 minuutin konsultaatio ja jutellaan aiheesta lisää! <a href="https://calendly.com/perheenvoima/30min" target="_blank" rel="noreferrer">Siirry kalenteriin</a></p>
         </div>
      </PageComponent>
   )
}
