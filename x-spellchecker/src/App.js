import {useState} from "react";

function App() {
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  const [data,setData] = useState('');
  const [spell,setSpell] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);

    if(data === "" || data.trim() === "") return;

    const words = (data + ' ').split(' ');

    const check = words.find(word => customDictionary[word.toLowerCase()]);

    const correction = check ? customDictionary[check.toLowerCase()] : '';

    setSpell(correction || '');
  }


  return (
    <div className="App">
      <h1>Spell Check and Auto-correction</h1>    
      <textarea value={data} placeholder="Enter text..." onChange={handleChange}></textarea>
      {spell !== '' ? (<p>Did you mean: <span style={{fontWeight: 'bold'}}>{spell}</span>?</p>) : ('')}
    </div>
  );
}

export default App;
