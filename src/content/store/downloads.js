export const RECEIVE_ITEM = "downloads/RECEIVE_ITEM";
export const REMOVE_ITEM = "downloads/REMOVE_ITEM";


const initialState = {
    items: {
        
    }
};

export const receiveItem = item => {
    return {
        type: RECEIVE_ITEM,
        payload: item
    }
}

export const removeItem = itemID => {
    return {
        type: REMOVE_ITEM,
        payload: itemID
    }
}

export default function downloadsReducer(state = initialState, action) {
    let newState = { ...Object.freeze(state) }

    switch (action.type) {
        case RECEIVE_ITEM:
            return { ...newState,
                items: { ...newState.items,
                    [action.payload.id]: action.payload
                }
            }
        case REMOVE_ITEM:
            delete newState[action.payload]
            return newState;
        default:
            return state;
    }
}