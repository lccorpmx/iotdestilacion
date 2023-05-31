import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@mui/material/Button';
import OnnOff from '../components/onoff'
import Card from '@/components/card'
import CardProceso from '@/components/cardProceso'
import Timer from '@/components/Timer'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
     <OnnOff></OnnOff>
     <Timer/>

     <div className='grid grid-cols-2 gap-4'>
     <Card titulo='Temperatura' valor={45}/>
     <Card titulo='Presion' valor={110}/>
     <Card titulo='Caudal' valor={4}/>
     <Card titulo='Velocidad' valor={455}/>
     </div>
     
     <div>
      <div className='bg-white text-black m-4 rounded-xl'>
        <p className='text-center text-4xl'>CBD Estimado: 85%</p>
      </div>
     </div>
    </div>
  )
}
