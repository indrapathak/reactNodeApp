// WE HAVE TO CREATE THE REDUCERS BECAUSE THEY ARE THE ONLY FUNCTIONS WHO CAN UPDATE THE REDUX STORE NO ONE ELSE
const initialFormData = {
    
}

const addFormData = (state = initialFormData, action) => {
    console.log("addFormData reducer is called with payload and action type",action.payload,action.type);
    switch (action.type) {
        case 'ADD_FORMDATA':
            const { id, data } = action.payload;
            return {
                ...state,
                 data
            }
    }
    return state;
}

export default addFormData;