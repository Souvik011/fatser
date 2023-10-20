import { useEffect,useState } from "react";

const ResturentPage = () => {
    const [dataa,setDataa] = useState([]);
    useEffect(()=>{
        let token = localStorage.getItem('token');
        console.log(token);
        let url = "https://staging.fastor.in/v1/m/restaurant?city_id=118&&";
        fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', 
            },
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json(); 
            })
            .then((data) => {
              console.log(data);
              setDataa(data);
            })
            .catch((error) => {
              console.error('There was a problem with the fetch operation:', error);
            });
        
    },[]);
    console.log(dataa);
    return (<div>
            {dataa.map((val)=>(<div>{val.restaurant_name}</div>))}
    </div>)
};

export default ResturentPage;