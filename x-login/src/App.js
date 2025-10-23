import {useState} from "react";

function App() {
  const [data,setData] = useState({
    username: "",
    password: "",
  })

  const [valid,setValid] = useState();
  const [form,showForm] = useState(true);

  const handleChange = (e) => {
    setData(prev => ({...prev, [e.target.name] : e.target.value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(data.username === "user" && data.password === "password"){
      showForm(false);
      setValid(true);
      return;
    }

    setValid(false);
  }

  return (
    <div className="App">
      <h1>Login Page</h1>
      <p>{valid === false ? ('Invalid username or password') : ('')}</p>

      {form ? (<form>
        <label for="username">Username: </label>
        <input type="text" id="username" value={data.username} placeholder='username' name="username" onChange={handleChange} required/> <br/>

        <label for="password">Password: </label>
        <input type="password" id="password" value={data.password} placeholder='password' name="password" onChange={handleChange} required/> <br/>

        <input type='submit' value='submit' onClick={handleSubmit}/>
      </form>) : (<p>{valid ? ('Welcome, user!') : ('')}</p>)}
    </div>
  );
}

export default App;
