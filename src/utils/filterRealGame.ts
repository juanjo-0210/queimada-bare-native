import { translate } from "../api/translate"
import { createGameData } from "../service/setNewGame"


export const filterRealName = (array: Record<any, string>[] ): any[] | string => {
  const res = array.filter((tech: any) => tech['_attributes'].primary === "true")
  return res[0]['_text']
}








// CODIGO RECICLADO PERO UTIL







// Esta funcion elimina las etiquetas HTML .replace( /(<([^>]+)>)/ig, '')


export const createCleanData = (data:any[]) => {
  // data tendra una propiedad llamada name con un objeto instanciado con dos propiedades llamadas _atribute y _text en este ultimo se almacena el nombre del juego


  //primero comprobar si name es un solo objeto instanciado o un objeto
  data.map(  (d:any, index:number) => {
    setTimeout( async() => {

        if (d.name.length > 0) {

          //es un array con varios titulos
          //_atribute.primary almacena un boleano con el nombre correcto
          try {
            createGameData({...d, title: filterRealName(d.name)})
            console.log("exito!!!!")
          } catch (error) {
            console.log("Error", error)
          }
          
        }else{
          //es un objeto, almacena un unico nombre
          try {
            createGameData({...d, title: d.name["_text"]})
            
            console.log("exito!!!! linea 2")
          } catch (error) {
            console.log("Error linea 2", error)
          }
          
        }

    },250*index)
  })

  console.log("It works")
} 