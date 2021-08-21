//Here we are defining actions,ACTIONS ARE FUNCTIONS WHICH DEFINE WHAT IS TO BE DONE TO THE DATA, the actions are then dispatched

export const addTodo = (data) =>{
    return {
        type : "ADD_TODO" ,
        payload : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const deleteTodo = (id) =>{
    return {
        type : "DELETE_TODO",
        id
    }
}

export const removeTodo = () =>{
    return {
        type : "REMOVE_TODO"
    }
}