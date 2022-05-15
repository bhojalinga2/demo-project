import { useEffect, useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import "./Style.css";

function App() {
    const [mealData, setMealData] = useState([]);
  const [searchValue , setSearchValue] = useState('');
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = ()=>{
	let url = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

	if(searchValue && searchValue.length > 0){
		url +=`=${searchValue}`
	}

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMealData(data.meals);
        console.log('ddddd', data);
      });
  }
  const handleSearchValue =(e)=>{
	  setSearchValue(e.target.value)
  }

  const handleSeach =()=>{
	fetchData()
  }

    return ( <div className='btn'>
        <input onChange={handleSearchValue}placeholder="Search"/>	 
	  <button onClick={handleSeach} >Submit</button>
      <table className='meal-table'>
        <tr>
          <th>strArea</th>
          <th>strCategory</th>
          <th>strInstructions</th>
          <th>strMeal</th>
          <th>strTags</th>
        </tr>
        {mealData && mealData.map((item) => (
          <tr>
            <td>{item.strArea}</td>
            <td>{item.strCategory}</td>
            <td>{item.strInstructions}</td>
            <td>{item.strMeal}</td>
            <td>{item.strTags}</td>
          </tr>
        ))}
		{
			mealData && mealData.length === 0 || !mealData && 
			<p>No data found,<br/>
               Please Enter A Valid Data
            </p>
        
		}
      </table>
    </div>
    );
}

export default App;