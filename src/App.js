import { useEffect, useState } from "react"
import { fetchData } from "./fetchData";
import TreeSelect from "./components/TreeSelect";
// import data from './data.json'

function App() {
  
const[state, setState]= useState([])

useEffect(()=>{
  fetchData().then(data => {
    setState(data)
  })
},[])

const [selectedIds, setSelectedIds] = useState([])

  return (
    <TreeSelect
      categories={state}
      selectedIds={selectedIds}
      setSelectedIds={setSelectedIds}
    />
  )
}

export default App;
