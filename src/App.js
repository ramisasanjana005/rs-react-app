import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const buddyNames = ['Ramisa', 'Adiba', 'Raisa']

  const products = [
    {name: 'PhotoShop', price: '$90.99'},
    { name: 'Illustrator', price: '$60.99'},
    { name: 'PDF Reader', price: '$6.99'},

  ]

 // const productNames = products.map(product => product.name) 
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
       <p>This is a Buddies Name List</p>
       <ul>
{
            buddyNames.map(buddyName => <li>{buddyName}</li>)
}
{
      products.map(product => <li>{product.name}</li>)

}
        </ul> 
        {
          products.map(pd=><Product product={pd}></Product>)
        }
        <Person name={buddyNames[0]} food="Burger" color="Black"></Person>
        <Person name="Rezaul Karim" food="Biriyani" color="Violet"></Person>

        <Product product={products[0]}></Product>

      </header>
    </div>
  );
}

//declaring a component with style object
//making components dynamic with props (similar in pattern dynamic in data)
function Person(props) {
  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Favorite Food: {props.food}</h2>
      <h2>Favorite Color: {props.color}</h2>

    </div>
  )
  }

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return(
    <div>
    <h1>  Count: {count} </h1>
    <button onClick={handleDecrease}>Decrease</button>
    <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
}  

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
      .then(data => setUsers(data));

  }, []) 
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h1>Name: {name}</h1>     
      <h1>Price: {price}</h1>
    </div>
  )

}

export default App;
