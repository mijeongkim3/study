import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
// import dummy from "../db/data.json";

export default function DayList(){
  const days = useFetch("http://localhost:3001/days")
  // console.log(dummy);
  // const [days,setDays]= useState([]);

  // useEffect(()=>{
  //   fetch('http://localhost:3001/days').then(res => {
  //     return res.json()
  //   }).then(data => {
  //     setDays(data);
  //   });
  //   // console.log("Count change");
  // },[]);//랜더링직후 딱한번만 실행 
  


  return (
  <><ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
    {/* <button onClick={onClick}>{count}</button>
    <button onClick={onClick2}>Day change</button> */}
  </>
  );
}