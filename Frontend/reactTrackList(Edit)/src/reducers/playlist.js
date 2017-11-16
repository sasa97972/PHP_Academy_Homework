const initialState = {
    tracks: [
        {
            track: 'Smells like spirit',
            id: 1
        },
        {
            track: 'Enter Sandman',
            id: 2
        },
        {
            track: 'Enter Sandman2',
            id: 3
        },
    ],
};

export default function playlist(state = initialState, action)
{
    let newItem, item, index;
    switch(action.type){
        case "ADD_TRACK":
            newItem = state.tracks.slice();
            newItem.push({
                track: action.payload,
                id: Date.now()
            });
            return {tracks: newItem};
        case "DELETE_TRACK":
            newItem = state.tracks.slice();
            item = newItem.find(i => i.id === action.payload);
            index = newItem.indexOf(item);
            newItem.splice(index, 1);
            return {tracks: newItem};
        case "EDIT_TRACK":
            newItem = state.tracks.slice();
            let {track, id} = action.payload;
            item = newItem.find(i => i.id === id);
            index = newItem.indexOf(item);
            newItem[index].track = track;
            return {tracks: newItem};
        default:
            return state;
    }
}