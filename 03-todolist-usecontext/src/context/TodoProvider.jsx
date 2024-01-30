import { useState } from "react";
import TodoContext from "./TodoContext";

const initialState = [
    {
        id:1, texto:"Comprar pan", completada:false,
    },
    {
        id:2, texto:"Comprar azúcar", completada:false,
    },
    {
        id:3, texto:"Comprar chicles", completada:false,
    },

]

const TodoProvider = ({children}) => {
    const [tareas, setTareas] = useState(initialState);

    // de una tarea querré: a)crearTarea, b)completarTarea, c)eliminarTarea, d)contarTarea
    function agregarTarea("texto") {
        nuevaTarea = {id:}
        setTareas([...tareas],nuevaTarea);
    }

    return (
        <TodoContext.Provider value={tareas}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;