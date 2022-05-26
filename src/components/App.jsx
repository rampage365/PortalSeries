import { useRef, useState } from "react"
import { getSeries } from "../services/getSeries"
import { Series } from "./Series"

function App () {
  
  const buscarRef = useRef()

  const [data, setData] = useState([])

  const onGetSeries = async(e)=>{
    e.preventDefault()
    //console.log(buscarRef)
    const{value} = buscarRef.current
    const res = await getSeries(value)
    setData(res)
    console.log(res)
  }

  return (
    <section className="container">
      <h4 className="py-3 text-center">Portal de Peliculas</h4>
      {/* buscador */}
      <form onSubmit={onGetSeries}>
        <div className="input-group mb-3">
          <button className="btn btn-primary" >
            <i className="bi bi-search"> 
            </i>
          </button>
          <input ref={buscarRef} required={true} className="form-control" type="text" name="buscador" id="buscador" placeholder="Buscar.." />
        </div>
      </form>
      {/* grid de peliculas */}
      <Series data={data}/>
    </section>
  )
}

export default App
