import React, { useState, useEffect } from "react";
import getUserLocation from "./components/getUserLocation";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "fec5b17580f8610ab77c4a7dcd3e4646";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&";

  const addTask = (task, priority) => {
    setTasks([...tasks, { task, priority }]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  useEffect(() => {
    if (tasks.length > 0) {
      getUserLocation()
        .then((location) => {
          fetch(
            `${apiUrl}lat=${location.lat}&lon=${location.lon}&appid=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.cod === 200) {
                setWeather(data);
                setError(null);
              } else {
                setWeather(null);
                setError(data.message);
              }
            })
            .catch((error) => {
              setWeather(null);
              setError(error.message);
            });
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [tasks]);

  return (
    <div className="App">
      {!isAuthenticated ? (
        <Auth isAuthenticated={isAuthenticated} />
      ) : (
        <>
          <AddTask onAddTask={addTask} isAuthenticated={isAuthenticated} />
          <TaskList tasks={tasks} onDeleteTask={deleteTask} />

          <div className="w-full justify-center flex items-center font-semibold mt-4">
            {weather && (
              <div className="md:w-4/12 sm:w-auto flex flex-col space-y-4 bg-emerald-400 p-4 rounded-2xl text-white text-xl">
                <h3 className="city">Weather for {weather.name}</h3>
                <div>
                  <p>{weather.weather[0].description}</p>
                </div>
                <p className="temp">Temperature: {weather.main.temp}°C</p>
              </div>
            )}
            <div className="error">
              <p>{error && <p>Error fetching weather: {error}</p>}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
