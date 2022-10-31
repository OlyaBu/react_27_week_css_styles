import React from 'react';
import styles from './App.css';
import Card from './components/card';

const array=[
  {title:"Безлимит 350",
    price:"350",
    speed:"до 30 мб/сек",
  discription:"Объем включенного трафика не ограничен",
  backgroundColor:"rgb(72, 209, 204)",
},
{title:"Безлимит 450",
price:"450",
speed:"до 40 мб/сек",
discription:"Объем включенного трафика не ограничен",
backgroundColor:"rgb(60, 179, 113)",
},
{title:"Безлимит 550",
price:"550",
speed:"до 50 мб/сек",
discription:"Объем включенного трафика не ограничен",
backgroundColor:"rgb(205, 92, 92)",
isSelected: true,
},
{title:"Безлимит 1000",
price:"1000",
speed:"до 100 мб/сек",
discription:"Объем включенного трафика не ограничен",
backgroundColor:"rgb(	20, 13, 25)",
},
];

export default function App(props) {
 
  return (
    <div className={styles.App}>
{
  array.map((item) =>
  <Card title={item.title} price={item.price} 
  speed={item.speed} discription={item.discription} backgroundColor={item.backgroundColor} 
  isSelected={item.isSelected}
  />
  )
}
    </div>
  )
}


