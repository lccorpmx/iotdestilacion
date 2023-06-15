import {Thermometer, Gauge, Waves} from 'lucide-react';


interface CardProps {
    iconName: string
    iconSize: number
}

export default function Icon({iconName, iconSize}:CardProps) {
    const renderIcon = (icono: string) => {
        switch(icono){
          case 'temperatura':
              return  <Thermometer color="green" size={iconSize}/>;

          case 'presion':
              return  <Gauge color="green" size={iconSize}/>;

          case 'caudal':
              return  <Waves color="green" size={iconSize}/>;

          case 'velocidad':
              return  <Gauge color="green" size={iconSize}/>;

          default:
              return null;
      }
      };
    return (
      <>{renderIcon(iconName)}</>
    )
  }
