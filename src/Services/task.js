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

export function addTask(task) {
  const tasks = { ...task };
  Object.keys(tasks).forEach((key) => {
    if (task[key] === "" || task[key] === null || task[key] === undefined) {
      delete task[key];
    }
  });
  return http.post(`tasks`, task);
}

export function deleteTask(id) {
  return http.delete(`tasks/${id}`);
}
