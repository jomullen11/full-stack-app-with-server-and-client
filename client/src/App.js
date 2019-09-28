import React, { useState, useEffect } from 'react';
import Present from './components/Presenter'

function App() {
  const [dataRead, setDataRead] = useState('')

  const getData = async () => {
    fetch(`/api/data`)
    .then(response => response.json())
    .then(data => data.map(element => <Present read={element} key={element._id} />))
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
