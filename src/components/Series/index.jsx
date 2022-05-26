import { useState } from "react"
import { Error } from "../Error"

const Resume = ()=> <p>Resumen</p>

export const Series = ({data}) => {
/*   const testApiKey = import.meta.env.APP_API_KEY

  console.log(testApiKey) */

  const [isOpen, setIsOpen] = useState(false)

  const toolTip= () =>{
    setIsOpen(true)
  }

  console.log(data)

  return ( 
    <section className="py-3">
      { 
      data && data.length > 0 
      ? (
      <>
        <ul className="row contenedor">
          {
            data.map(serie => (
              <li onMouseEnter={toolTip} key={serie.show.id} className="col-3 py-1">
                {
                  isOpen ? <Resume/>:null
                }
                <article className="card text-light imagen-contenedor" >
                  {/* <abbr title={serie.show.name} > */}
                    <figure>
                      <img className="img-fluid" src={serie.show.image ===null? Error():serie.show.image.medium } alt={serie.show.name} />
                      <div class="efecto">
                        {/* <h6 className="px-1 text-center"> {serie.show.name}</h6>
                        <p className="px-1 text-center"> {serie.show.ended===null ?"En estreno":serie.show.ended}</p> */} 
                        
                        <div className="div-top">
                          <div className="sup-izq">
                            Titulo de...
                            <svg className="svg-dropdown-guardar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                            </svg>
                          </div>   
                          <div className="sup-derecho">
                            Guardar
                          </div>
                        </div>


                        <div className="div-bottom">

                          <div className="inf-izq">    
                            <div className="one-inf-izq">
                              <svg className="svg-link" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z " stroke="black" strokeWidth="0.7" />
                              </svg>
                            </div>   
                            <div className="two-inf-izq">
                              miweb.com
                            </div>               
                          </div>
                          
                            <div className="inf-centro">
                              <svg className="svg-upload" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fill="#000" fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" stroke="black" strokeWidth="0.8" />
                                <path fill="#000" fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" stroke="black" strokeWidth="0.5" />
                              </svg>
                            </div>
                            <div className="inf-derecho">
                              <svg className="svg-mas" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path fill="#000" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                              </svg>
                            </div>
                          
        
                        </div>
                        

                      </div>
                    </figure>
                  {/* </abbr> */}
                  
                </article>
              </li>
            ))
          }
        </ul>
      </>
      )
      :null
      }
    </section>
  )
}
