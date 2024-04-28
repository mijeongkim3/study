import { useParams } from 'react-router-dom';
// import dummy from "../db/data.json";
import Word from './Word';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Day(){
//dummy.words
    // const day = 4;
    // const a = useParams();
    // console.log(a);
    // const day = a.day;
    // const day = useParams().day;
    //const {day} = useParams(); 위랑 같은거임
    
    // const wordList = dummy.words.filter(word => word.day === Number(day));
    // console.log (wordList);
    const { day } =useParams();
    // const[words, setWords] = useState([]);

    // useEffect(()=>{
    //   fetch(`http://localhost:3001/words?day=${day}`).then(res => {
    //     return res.json()
    //   }).then(data => {
    //     setWords(data);
    //   });
    // },[day]);

    const words = useFetch(`http://localhost:3001/words?day=${day}`)
    return (
    <>
    <h2> Day {day} </h2>
    <table>
      <tbody>
        {words.map(word=> (
          <Word word={word} key={word.id}/>
        ))}
      </tbody>
    </table>
  </>
    )
}