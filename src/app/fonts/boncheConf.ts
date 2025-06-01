import localFont from 'next/font/local'

const bonche = localFont({
   src:[
    {
    path: './Bonche/Demo_Fonts/Fontspring-DEMO-bonche-regular.otf',
    weight: '400',
    style: 'normal',
    }
   ] ,
   variable: '--font-bonche',
   display: 'swap'
})

export default bonche;
