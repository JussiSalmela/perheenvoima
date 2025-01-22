import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export default function PageFooter() {
   return (
      <div className="page-footer">
         <div style={{
            // backgroundColor: 'lightgray',
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}>
            <p>
               Varaa aika soittamalla tai laittamalla viestiä. <br />
               {/* Pyydä tarjous. */}
            </p>
         </div>
         <div style={{
            // backgroundColor: 'lightgray',
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
         }}>
            <div>
               <div>
                  <h4 style={{ marginBottom: '8px' }}>Pia Laine</h4>
               </div>
               <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '8px' }}>
                  <PhoneIcon />
                  <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>045 1636460</span>
               </div>
               <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '8px' }}>
                  <EmailIcon />
                  <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>lainepia@hotmail.com</span>
               </div>
            </div>
         </div>
      </div>
   )
}
