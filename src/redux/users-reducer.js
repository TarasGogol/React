const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    users: [
        {id: 1, followed:false, fullName: 'Taras', status: 'I am a boss', location:{city:"Kiev", country:"Ukraine"}},
        {id: 2, followed:true, fullName: 'Vasyl', status: 'I like football', location:{city:"Ivano-Frankivsk", country:"Ukraine"}},
        {id: 3, followed:false, fullName: 'Petro', status: 'How are you', location:{city:"Chernivtsi", country:"Ukraine"}},
    ],
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let stateCopy ={
                ...state,
                users:state.users.map(u => {
                    if (u.id === action.userId){

                    }
                   return u;
                })
            }
        case UNFOLLOW:
        default:
            return state;
    }
}
export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export default usersReducer;