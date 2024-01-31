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
    const crearTarea = (texto) => {
        const nuevaTarea = {
            id: tareas.length + 1,
            texto: texto,
            completada: false,
        };
        setTareas([...tareas, nuevaTarea]);
    };

    const completarTarea = (id) => {
        const nuevasTareas = tareas.map((tarea) =>
            tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
        );
        setTareas(nuevasTareas);
    };

    const eliminarTarea = (id) => {
        const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
        setTareas(nuevasTareas);
    };

    const contarTareas = () => {
        return tareas.length;
    };

    return (
        <TodoContext.Provider value={tareas}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider;