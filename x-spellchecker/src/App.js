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
    const text = e.target.value;
    setData(text);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setSpell( firstCorrection || "" );
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
