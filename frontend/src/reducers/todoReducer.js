// WE HAVE TO CREATE THE REDUCERS BECAUSE THEY ARE THE ONLY FUNCTIONS WHO CAN UPDATE THE REDUX STORE NO ONE ELSE
const initialData = {
    list: []
}

const todoReducer = (state = initialData, action) => {

      console.log("todoreducer is called with payload",action.payload);
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DELETE_TODO":
           
            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case "REMOVE_TODO":
                return {
                    ...state,
                    list: []
                }
    }

    return state;
}

export default todoReducer;