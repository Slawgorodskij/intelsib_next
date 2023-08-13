import localFont from 'next/font/local'

const helvetica = localFont({src: '../fonts/Helvetica.woff2', variable: '--font-helvetica'})
const helveticaBold = localFont({src: '../fonts/HelveticaBold.woff2', variable: '--font-helvetica-bold'})
const helveticaLight = localFont({src: '../fonts/HelveticaLight.woff2', variable: '--font-helvetica-light'})
const roboto = localFont({src: '../fonts/RobotoRegular.woff2'})
const robotoBold = localFont({src: '../fonts/RobotoBold.woff2',  variable: '--font-roboto-bold'})

export {helvetica, helveticaBold, helveticaLight, roboto, robotoBold}
