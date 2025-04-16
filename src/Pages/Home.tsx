import React from 'react'
import PageComponent from '../Components/PageComponent';

export default function Home() {

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
        <h1 style={{ marginBottom: 50 }}>Perhearjen hyvinvointia vahvistamassa</h1>
        <div>
          <h3>Joskus tarvitsemme vain tsemppauksen oikeaan suuntaan.</h3>
          <p>
            Löydetään yhdessä perheen voimavara paremman hyvinvoinnin saavuttamiseksi. Arjen tilanteita joissa usein koetaan hankaluuksia ovat esimerkiksi siirtymät, pukeminen, sisarusten ristiriidat, syömispulmat, nukkuminen ja uhmaikä. Ohjauksella huomioidaan lapsen oma motivaatio, tunteet ja tarpeet. Tärkeintä on huomioida lapsen jo olemassa olevat taidot sekä lapsen ja perheen voimavarat.
          </p>
        </div>
        <div>
          <h4>Mikä on perhetyö Perheenvoimassa</h4>
          <p>
            Perhetyö on lapsen ja perheen hyvinvointia tukeva palvelu. Perhetyö Perheenvoimassa on suunnattu vahvistamaan koko perheen voimavaroja ja parantamaan perheen sisäistä vuorovaikutusta. Yrityksen tarjoama perhetyö neurokirjon perheille on tukitoimi lapsiperheiden arjen haasteisiin, tilanteissa, joissa neuropsykiatriset oireet tai niiden piirteet aiheuttavat haasteita arjen sujuvuudelle. Palvelu alkaa konsultaatiolla jossa kartoitetaan perheen tilannetta. Perheen voimavaroista keskustellaan ja pohditaan, missä vanhemmat mahdollisesti tarvitsisivat lisätukea. Ohjaus voidaan toteuttaa etänä, lapsen ja perheen kotona ja perheen muussa toimintaympäristössä. Toimintani keskiössä on aina lapsen etu, palveluni perustuvat perhelähtöisyyteen,  ratkaisukeskeisyyteen ja luotettavuuteen.
          </p>
        </div>
        <p style={{fontWeight: 'bold'}}> Mietitkö, voisiko ratkaisukeskeinen perhe valmennus olla teidän juttu? Varaa ilmainen 20 minuutin konsultaatio ja jutellaan aiheesta lisää! <a href="https://calendly.com/perheenvoima/30min" target="_blank" rel="noreferrer">Siirry kalenteriin</a></p>
      </div>
    </PageComponent>
  );
}
