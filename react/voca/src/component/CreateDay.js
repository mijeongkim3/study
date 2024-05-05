import useFetch from '../hooks/useFetch';

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  return (//.
    <div>
      <h3> 현재 일수: {days.length} 일 </h3>
      <button> Day 추가</button>
    </div>
  );
}