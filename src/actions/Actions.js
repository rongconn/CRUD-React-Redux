import * as types from '../containers/CRUD';
export const addUser = (name, username, email, phone, website)=>({
    type: types.ADD_USER,
    name,
    username,
    email,
    phone,
    website
});
export const editUser = (name, username, email, phone, website)=>({
    type: types.EDIT_USER,
    name,
    username,
    email,
    phone,
    website
});
expor