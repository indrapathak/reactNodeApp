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

export const changeName = Name =>{
    return{
        type:"CHANGE_NAME",
        payload: Name 
    }
}

export const changeEmail = email =>{
    return{
        type:"CHANGE_EMAIL",
        payload: email 
    }
}

export const changeMobile = mobile =>{
    return{
        type:"CHANGE_MOBILE",
        payload: mobile 
    }
}

export const changeAddress = address =>{
    return{
        type:"CHANGE_ADDRESS",
        payload: address  
    }
}

export const changeCompany = company =>{
    return{
        type:"CHANGE_COMPANY",
        payload: company
    }
}

export const addFormData = (data) =>{
    console.log("data inside formdata function of actions is",data)
    return {
        type : "ADD_FORMDATA" ,
        payload : {
        
            data : data
        }
    }
}