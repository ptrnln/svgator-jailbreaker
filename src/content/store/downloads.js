import { file } from "@babel/types";

export const RECEIVE_FILE = "downloads/RECEIVE_FILE";
export const REMOVE_FILE = "downloads/REMOVE_FILE";


const initialState = {
    files: {
        
    }
};

export const receiveFile = file => {
    return {
        type: RECEIVE_FILE,
        payload: file
    }
}

export const removeFile = fileID => {
    return {
        type: REMOVE_FILE,
        payload: fileID
    }
}

export default downloadsReducer = (state = initialState, action) => {
    let newState = { ...Object.freeze(state) }

    switch (action.type) {
        case RECEIVE_FILE:
            return { newState,
                [action.payload.id]: action.payload
            }
        case REMOVE_FILE:
            delete newState[action.payload]
            return newState;
        default:
            return state;
    }
}