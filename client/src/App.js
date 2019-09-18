import React, { useState, useEffect } from 'react';
import { API_URL } from './nav/config'
import Present from './components/Presenter'

function App() {
  const [dataRead, setDataRead] = useState('')
  const API_URL = 'http://localhost:8000'

  const getData = async () => {
    fetch(`/api/data`)
    .then(response => response.json())
    // .then(data => data.map(element => <Present read={element} />))
    .then(element => JSON.stringify(element))
    .then(components => setDataRead(components))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getData()
  })

  return (
    <>
    {dataRead}
    </>
  );
}

export default App;
