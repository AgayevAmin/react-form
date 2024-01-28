// import logo from './logo.svg';
// import './App.css';
// import {Card} from './Card';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          <form className="form" >
//           <input  type="text" className="form-control" name="name"  placeholder="  Ad  "></input>
//           <input  type="text" className="form-control" name="name"  placeholder=" Soyad "></input>
//           <input type="email" className="form-control" name="email" placeholder="E-poçt ünvanı"></input>
//           <input type="tel" className="form-control" name="phone"  placeholder="Mobil nömrə"></input>
//           <button type="submit" className ="form-btn" > Qeydiyatdan Kec </button>
//          </form>
//       </header>
//       <Card/>

//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';

function MyForm() {
  // Define state variables for each form field and submitted data
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Save submitted data to state
    setSubmittedData({ name, email, message });
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </label>
          <br />
          <label>
            Email:
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </label>
          <br />
          <label>
            Message:
            <textarea 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              required 
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Message: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default MyForm;