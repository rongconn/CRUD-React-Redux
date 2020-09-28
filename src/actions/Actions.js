// import {GET_USERS, GET_USER, ADD_USER, UPDATE_USER, DELETE_USER} from '../containers/CRUD';
// const handleResponse = (response) => {
//     if (response.ok) {
//         return response.json();
//     } else {
//         let error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//     }
// }
// export const fetchGames = () => (
//     async dispatch => {
//         const response  = await fetch('http://localhost:3003/users');
//         const games = await response.json();
//         dispatch({
//             type: GET_USERS,
//             games
//         });
//     }
// )
// export const fetchGame = (id) => (
//     async dispatch => {
//         const response  = await fetch(`http://localhost:3003/users/${id}`);
//         const game = await response.json();
//         dispatch({
//             type : GET_USER,
//             game
//         });
//     }
// )

// export const saveGame = (data) => (
//     async dispatch => {
//         const game = await fetch('http://localhost:3003/users', {
//             method: 'post',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }); 
//         handleResponse(game);
//         await dispatch({
//             type: ADD_USER,
//             game
//         });
//     }
// )

// export const updateGame = (data) => (
//     async dispatch => {
//         const game = await fetch(`http://localhost:3003/users/${data._id}`, {
//             method: 'put',
//             body: JSON.stringify(data),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         handleResponse(game);
//         await dispatch({
//             type: UPDATE_USER,
//             game
//         });
//     }
// )

// export const deleteGame = (id) => (
//     async dispatch => {
//         const game = await fetch(`http://localhost:3003/users/${id}`, {
//             method: 'delete',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         handleResponse(game);
//         await dispatch({
//             type : DELETE_USER,
//             id
//         });
//     }
// )


// // export const addUser = (name, username, email, phone, website)=>({
// //     type: types.ADD_USER,
// //     name,
// //     username,
// //     email,
// //     phone,
// //     website
// // });
// // export const editUser = (name, username, email, phone, website)=>({
// //     type: types.EDIT_USER,
// //     name,
// //     username,
// //     email,
// //     phone,
// //     website
// // });
// // export const deleteUser = (id) => ({
// //     type: types.DELETE_POST,
// //     id: id
// // });