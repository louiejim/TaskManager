import { jwtDecode } from "jwt-decode";
import http from "./http";

export function register(name, username, password) {
 return http.post("/users", { name, username, password });
}

export function login(username, password) {
 return http.post("/auth", { username, password });
}

export function getAccessToken(){
    return localStorage.getItem('accessToken')
}

export function getCurrentUser(){
    const accessToken = localStorage.getItem('accessToken');

    if(accessToken){
        const decode =jwtDecode(accessToken)   // npm i jwt-decode
        return decode.user;
    }


    return null
}

export function logout(){
    return localStorage.removeItem('accessToken')
}
