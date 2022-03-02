const api_key=`f69b2caf8695d5ed7e6a5b7f8b7d7482
`
const searchBtn=()=>{
    const inputField=document.getElementById('input-field');
    const inputValue=inputField.value;
    inputField.value='';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_key}&units=metric`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemp(data))
}

const setInner=(id,text)=>{
    document.getElementById(id).innerText=text;
}
const displayTemp=tem=>{
    setInner('city',tem.name);
    setInner('temper',tem.main.temp);
    setInner('clouds',tem.weather[0].main);
    //set icon
    const url=`http://openweathermap.org/img/wn/${tem.weather[0].icon}@2x.png`
    const imgIcon=document.getElementById('weather');
    imgIcon.setAttribute('src',url)
}