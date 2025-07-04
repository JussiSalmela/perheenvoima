import React from 'react'
import PageComponent from '../Components/PageComponent'
import { Button, useMediaQuery } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
   interface Palette {
      custom: Palette['primary'];
   }
   interface PaletteOptions {
      custom?: PaletteOptions['primary'];
   }
}

declare module '@mui/material/Button' {
   interface ButtonPropsColorOverrides {
      custom: true;
   }
}

const customColor = createTheme({
   palette: {
      custom: {
         main: '#deb295',
         light: '#e1ccbe',
         dark: '#e1ccbe',
         contrastText: '#000000',
      },
   },
});

export default function Downloads() {

   const isLargeScreen = useMediaQuery('(min-width:850px)');
   const docJSON = [
      {
         name: "Dialoginen lukeminen",
         desc: "",
         href: "/DialoginenLukeminen.pdf"
      },
      // {
      //    name: "Toinen dokumentti",
      //    desc: "Erillainen kuvausasda dasdasdasdasdasda sdasdasdasd asasdasdas ladattavasta tiedostosta",
      //    href: "/sample150kB.pdf"
      // },
      // {
      //    name: "Esimerkki PDF2",
      //    desc: "Kuvausta ladattavasta tiedostosta",
      //    href: "/sample150kB.pdf"
      // },
      // {
      //    name: "Toinen dokumentti2",
      //    desc: "Erillainen kuvausasda dasdasdasdasdasda sdasdasdasd asasdasdas ladattavasta tiedostosta",
      //    href: "/sample150kB.pdf"
      // },
      // {
      //    name: "Esimerkki PDF3",
      //    desc: "Kuvausta ladattavasta tiedostosta",
      //    href: "/sample150kB.pdf"
      // },
   ]

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

            {docJSON.map((doc, index) => {
               if (index % 2 === 0) {
                  return (
                     <div
                        key={index}
                        style={{
                           display: 'flex',
                           flexDirection: isLargeScreen ? 'row' : 'column'
                        }}
                     >
                        <DLContainer
                           href={doc.href}
                           name={doc.name}
                           desc={doc.desc}
                        />
                        {index + 1 < docJSON.length && (
                           <DLContainer
                              href={docJSON[index + 1].href}
                              name={docJSON[index + 1].name}
                              desc={docJSON[index + 1].desc}
                           />
                        )}
                     </div>
                  );
               }
               return null;
            })}

         </div>
      </PageComponent>
   )
}


export function DLbutton({ href }: { href: string }) {

   return (
      <ThemeProvider theme={customColor}>
         <Button
            variant="contained"
            color="custom"
            href={href}
            download
            startIcon={<DownloadIcon />}
            style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
         >
            Lataa tiedosto
         </Button>
      </ThemeProvider>
   )
}

export function DLContainer({ href, name, desc }: { href: string, name?: string, desc?: string }) {
   return (
      <div style={{
         margin: '0px 10px 20px 10px',
         borderRadius: 20,
         backgroundColor: '#e6dcd3',
         padding: 20,
         flex: 1,
         display: 'flex',
         flexDirection: 'column'
      }}>
         <h3>{name ? name : ''}</h3>
         <p style={{ marginTop: 0 }}>{desc ? desc : ''}</p>
         <DLbutton
            href={href}
         />
      </div>
   )
}