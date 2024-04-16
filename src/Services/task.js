import http from "./http";

export function getTask() {
  return http.get(`tasks`);
}

export function getAllTask() {
  return http.get(`tasks/all`);
}

export function editTask(id, completed) {
  const complete = { ...completed };
  Object.keys(complete).forEach((key) => {
    if (
      complete[key] === "" ||
      complete[key] === null ||
      complete[key] === undefined
    ) {
      delete complete[key];
    }
  });

  return http.put(`tasks/${id}`, complete);
}
