import React, { useEffect, useState } from "react";
import * as Service from "../../Services/task";
import { Box, CardActions, Grid } from "@mui/material";
import EditComponent from "./EditComponent";
import { getCurrentUser } from "../../Services/auth";
import EditTitle from "./EditTitle";

function TaskComponents() {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const isAdmin = getCurrentUser();

  useEffect(() => {
    setLoading(true);

    if (isAdmin) {
      Service.getAllTask()
        .then(({ data }) => {
          setTask(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error Fetching task", error);
        });
    } else {
      Service.getTask()
        .then(({ data }) => {
          setTask(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error Fetching task", error);
        });
    }
  }, []);

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
      <h1>TASK</h1>

      <Grid container spacing={2}>
        {task.map((task, index) => {
          return (
            <Grid key={index} item xs={3}>
              <Box
                sx={{
                  p: 2,
                  margin: 2,
                  maxWidth: 500,
                  flexGrow: 1,
                  backgroundColor: task.completed ? "lightgreen" : "lightgray",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <span>{task.title}</span>
                  <EditComponent
                    id={task.id}
                    complete={task.completed}
                    onComplete={onComplete}
                  />
                </div>
                <CardActions>
                  <EditTitle />
                </CardActions>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default TaskComponents;
