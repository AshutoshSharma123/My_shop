
import axios from "../../api/axiosconfig.jsx";
import { loadUser } from "../features/userSlice.jsx";
import { removeUser } from "../features/userSlice.jsx";

// Load user from localStorage
export const asyncgetUser = () => async (dispatch, getState) => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) dispatch(loadUser(user));
        else console.log("no user logged in");
    }
    catch (error) {
        console.log(error);
    }
};


export const asynclogoutUser = () => (dispatch, getState) => {
    localStorage.removeItem("user");
    dispatch(removeUser()); // clear Redux state too
};

export const asyncregisterUser = (user) => async (dispatch, getstate) => {
    try {
        const res = await axios.post("users", user);
        console.log(res);
    } catch (error) {
        console.log("error while register the user", error);
    }
};

export const asyncloginUser = (user) => async (dispatch, getstate) => {
    try {
        const { data } = await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        );
        if (data.length > 0) {
            dispatch(loadUser(data[0])); // ✅ send user object, not array
            localStorage.setItem("user", JSON.stringify(data[0]));
        } else {
            console.log("Invalid credentials");
        }
    } catch (error) {
        console.log(error);
    }
};


export const asyncupdateUser = (id, user) => async (dispatch, getState) => {
    try {
        // assuming your backend supports PUT /users/:id
        // const res = await axios.patch('users/' + id, user);
        const res = await axios.patch(`/users/${id}`, user); // ✅ correct URL format




        // ✅ update Redux
        dispatch(loadUser(res.data));

        // ✅ update localStorage
        localStorage.setItem("user", JSON.stringify(res.data));

        console.log("User updated successfully:", res.data);
    } catch (error) {
        console.log("Error while updating user", error);
    }
};

export const asyncdeleteUser = (id) => async (dispatch, getState) => {
    try {
        // assuming your backend supports DELETE /users/:id
        const res = await axios.delete('users/' + id);
        dispatch(asynclogoutUser());
    } catch (error) {
        console.log("Error while deleting user", error);
    }
};

