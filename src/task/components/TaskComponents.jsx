import React, { useEffect, useState } from "react";
import * as Service from "../../Services/task";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import EditComponent from "./EditComponent";
import { getCurrentUser } from "../../Services/auth";
import AddTaskPage from "../pages/AddTaskPage";
import DeleteComponent from "./DeleteComponent";

function TaskComponents() {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = getCurrentUser();

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const response = isAdmin
          ? await Service.getAllTask()
          : await Service.getTask();
        setTask(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching tasks:", error);
      }
    };

    fetchData();
  }, [task.title]);

  const onSave = async (form) => {
    try {
      setLoading(true);
      const response = await Service.addTask(form);
      setTask((prevTask) => [...prevTask, response.data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error editing task", error);
    }
  };

  const onComplete = async (id, data) => {
    try {
      setLoading(true);
      await Service.editTask(id, { completed: data });
      setLoading(false);
      setTask((prevTask) =>
        prevTask.map((taskItem) => {
          if (taskItem.id === id) {
            return { ...taskItem, completed: data };
          }
          return taskItem;
        })
      );
    } catch (error) {
      setLoading(false);
      console.error("Error editing task", error);
    }
  };

  const onDelete = async (id) => {
    const tasks = [...task];
    try {
      setLoading(true);
      await Service.deleteTask(id);
      setTask(task.filter((tasks) => tasks.id !== id));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 404) {
        alert("Data might have already been deleted");
      }
      setTask(tasks);
    }
  };

  return loading ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Loading....</h1>
    </div>
  ) : (
    <>
      <div style={{ marginTop: 90, position: "relative" }}>
        {!isAdmin && (
          <div style={{ position: "absolute", right: 20 }}>
            <AddTaskPage onSave={onSave} />
          </div>
        )}
      </div>

      <Grid container spacing={2}>
        {task.map((task, index) => {
          return (
            <Grid key={index} item xs={3}>
              <Card
                sx={{
                  p: 2,

                  margin: 3,
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: task.completed ? "lightgreen" : "lightgray",
                }}
              >
                <CardHeader
                  action={
                    <EditComponent
                      id={task.id}
                      complete={task.completed}
                      onComplete={onComplete}
                    />
                  }
                  title={`Activity no. ${index + 1}`}
                ></CardHeader>
                <CardContent style={{ Padding: "0" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <DeleteComponent id={task.id} onDelete={onDelete} />
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default TaskComponents;
