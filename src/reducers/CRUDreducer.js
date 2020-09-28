// import {GET_USERS, GET_USER, ADD_USER, UPDATE_USER, DELETE_USER} from '../containers/CRUD';
 
// const CRUDreducer = (state = [], action = {}) =>{
//      console.log(action);
//     switch (action.type){
//         case ADD_USER:
//             return [...state, action.user];
//         case GET_USERS:
//             return action.user;
//         case GET_USER:
//                 const index = state.findIndex(item => item._id === action.user._id);
//                 if (index > -1) {
//                     return state.map(item => {
//                         if (item._id === action.user._id) return action.user;
//                         return item;
//                     })
//                 } else {
//                     return [
//                         ...state,
//                         action.user
//                     ]
//                 }
//             case UPDATE_USER: 
//                 return state.map(item => {
//                     if(item._id === action.user._id) return action.user;
//                     return item;
//                 })
//             case DELETE_USER:
//                 return state.filter(item => item._id !== action.id)
//             default:
//                 return state
//     }


//  }
//  export default CRUDreducer;