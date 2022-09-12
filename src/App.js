import './App.css';
import { useState } from 'react';

function App() {
  
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [time, setTime] = useState(0)
  const [gender, setGender] = useState('male')
  const [alco, setAlco] = useState(0)

  const laske =  (e) => {
    e.preventDefault()
    let tulos = 0
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    
    if (gender === 'male' ) {
      tulos = gramsLeft / (weight * 0.7)
    } else {
      tulos = gramsLeft / (weight * 0.6)
   
    
    }
    if (tulos >= 0) {
    setAlco(tulos);
    }
    else {
      setAlco(0);
    }

  }

  return (
    <form style={{margin: '15px'}} onSubmit={laske}>
      <h3> Calculating alcohol blood level</h3>
    <div>
      <label>Weight</label>
      <input value={weight} onChange={e => setWeight(e.target.value)}/>
    </div>
    <div>
      <label>Bottles</label>
      <input type="number" style={{width: '45px'}} value={bottles} onChange={e => setBottles(e.target.value)}/>
    </div>
    <div>
      <label>Time</label>
      <input type="number" style={{width: '45px'}}  value={time} onChange={e => setTime(e.target.value)}/>
    </div>
    <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} defaultChecked/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
    </div>
    <br/>
    <output> {alco.toFixed(1)}</output>
    <div>
    <br/>
    <button>Calculate</button>
    </div>

    






    </form>
  );
}
export default App;
