import React, { ReactNode } from 'react'
import PageFooter from '../Components/PageFooter';
import { useTheme } from '@mui/material/styles';

interface PageComponentProps {
   children: ReactNode;
   imageUrl?: string;
   backgroundColor?: string;
}

export default function PageComponent({ children, imageUrl, backgroundColor }: PageComponentProps) {

   const theme = useTheme();
   return (

      <div style={{ flex: 1, overflowY: 'auto' }}>
         <div style={{
            position: 'fixed',
            // top: 100,
            top: theme.mixins.toolbar.minHeight,
            left: 0,
            width: '100%',
            height: '50vh',
            backgroundImage: `url("/${imageUrl || 'img1.jpg'}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
            opacity: 0.8
         }}>
         </div>
         <div style={{
            padding: '40px',
            backgroundColor: backgroundColor ? backgroundColor : '#e1ccbe',
            marginTop: '50vh',
            overflow: 'hidden',
            wordWrap: 'break-word',
            textOverflow: 'ellipsis'
         }}>
            {/* <div style={{ padding: '40px', backgroundColor: backgroundColor ? backgroundColor : '#e7dfd8', marginTop: '50vh' }}> */}
            {children}
         </div>
            <PageFooter />
      </div>
   );
}
