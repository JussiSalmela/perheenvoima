import React from 'react'
import PageComponent from '../Components/PageComponent'

export default function Downloads() {
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
            <h2>Ladattavat materiaalit</h2>
            <p>
               Tästä löydät ladattavat materiaalit.
            </p>
         </div>
      </PageComponent>
   )
}
