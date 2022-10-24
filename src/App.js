import React from 'react';
import './App.css';
import Card from './components/card';
import './components/card.css';

const array=[
  {title:"Безлимит 350",
    price:"350",
    speed:"до 10 мб/сек",
  discription:"Объем включенного трафика не ограничен",
},
{title:"Безлимит 450",
price:"450",
speed:"до 0 мб/сек",
discription:"Объем включенного трафика не ограничен",
},
{title:"Безлимит 550",
price:"550",
speed:"до 10 мб/сек",
discription:"Объем включенного трафика не ограничен",
},
{title:"Безлимит 1000",
price:"1000",
speed:"до 10 мб/сек",
discription:"Объем включенного трафика не ограничен",
},
];

export default function App(props) {
 
  return (
    <div className="App">
{
  array.map((item) =>
  <Card title={item.title} price={item.price} 
  speed={item.speed} discription={item.discription}></Card>
  )
}
    </div>
  )
}


