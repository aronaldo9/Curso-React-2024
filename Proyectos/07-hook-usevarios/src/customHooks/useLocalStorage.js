/**
 * Crear un custom hook al que se le pase una key y un valor inicial, y permita generar un hook llamado useLocalStorage
 * para guardar datos dentro de esa clave. El estado inicial será el valor pasado por parámetro siempre y cuando no exista la clave en el LS.
 * Si ya existe la clave, el valor inicial será el valor almacenado en esa clave.
 */

import { useState } from "react"

const useLocalStorage = (key, initialValue) => {
    const [saveValueStorage, setSetsaveValueStorage] = useState (() => {
        // Comprobamos si la key está en el LocalStorage
        const valorKeyLocalStorage = window.localStorage.getItem(key)
        return valorKeyLocalStorage ?  JSON.parse(valorKeyLocalStorage) : initialValue;
    })

    const setValueinLocalStorage = (value) => {
        setSetsaveValueStorage(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [saveValueStorage, setValueinLocalStorage];
}


export default useLocalStorage;