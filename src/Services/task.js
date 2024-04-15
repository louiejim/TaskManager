import http from "./http";

export function getTask(){
    return http.get(`/tasks`)
}