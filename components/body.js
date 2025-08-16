import React, { useState } from 'react'
import Info from './info'
import './body.css'
const Body = () => {
const [task, setTask] = useState('');
const [weather,setWeather]=useState(null);
const [error,setError]= useState('');
const APIKEY='031f89429240a590b8ba7bcbdf030691';

const fetchapi = async (city)=>{
    try{
        const res = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
        );
        
        if (!res.ok) {
            setError('City not found');
            setWeather(null);
            return;
        }
        const data = await res.json();
        setWeather(data);
        setError('');
    } catch(err){
        setError(err.message);
        setWeather(null);
    }
};
const handlekeyDown=(e)=>{
if(e.key === 'Enter' && task.trim() !== ''){
    fetchapi(task.trim());
    setTask('');
}
}

return (
    <div>
        City Name:
        <input
            type='text'
            placeholder='Enter valid city'
            value={task}
            onChange={e => setTask(e.target.value)}
            onKeyDown={handlekeyDown}
        />
        <Info weather={weather} error={error}/>
    </div>
)}

export default Body
