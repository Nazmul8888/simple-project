
import './App.css'

function App() {
  const handelAddUser = event =>{
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const user = {name,email}
    console.log(user);

    fetch('http://localhost:5000/users',{
      method: 'post',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data)

      if(data.insertId){
        alert('user added successfully ')
        
      }
    })





  }
  

  return (
    <>
      
      <h1>simple CRUD</h1>

      <form onSubmit={handelAddUser}>
        <input type="name" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App
