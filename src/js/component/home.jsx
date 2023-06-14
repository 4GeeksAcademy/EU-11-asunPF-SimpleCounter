

import React, { useState, useEffect } from "react";

const App = () => {
  const [time, setTime] = useState({
    minutes: 0,
    hours: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        let { minutes, hours, seconds } = prevTime;

        seconds = (seconds + 1) % 60;
        minutes = (minutes + Math.floor(seconds / 60)) % 60;

        return { minutes, hours, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const convertToTwoDigit = (value) => {
    return value.toString().padStart(2, "0");
  };

  return (
    <div className="counter">
   <i className="fas fa-clock">  </i>
      <span>  {convertToTwoDigit(time.hours)}  </span>

      <span>{convertToTwoDigit(time.minutes)}  </span>

      <span>{convertToTwoDigit(time.seconds)}  </span>
    </div>
  );
};

export default App;


/*
Here's an explanation of the provided code:

1. The code defines a functional component named `App` using the `useState` and `useEffect` hooks from React.

2. Inside the `App` component, the state is initialized using the `useState` hook. The state variable `time` is an object with initial values for `minutes`, `hours`, and `seconds` set to 0.

3. The `useEffect` hook is used to set up a timer that updates the `time` state every second. It executes the callback function passed to it after the component has mounted.

4. Inside the callback function of `useEffect`, a new interval is created using `setInterval`. This interval function runs every second (1000 milliseconds) and updates the `time` state using the `setTime` function.

5. The `setTime` function is called with a callback that receives the previous `time` state. It destructures the `minutes`, `hours`, and `seconds` values from the previous state.

6. The `seconds` value is incremented by 1 and then taken modulo 60 `(seconds + 1) % 60`. This ensures that the seconds remain within the range of 0 to 59.

7. The `minutes` value is incremented by `Math.floor(seconds / 60)`. This adds 1 to the minutes whenever the seconds reach 60, effectively keeping track of the minutes.

8. The updated `minutes` and `seconds` values are returned within the callback function, while the `hours` value remains unchanged.

9. The returned `minutes`, `hours`, and `seconds` values are used to update the state, triggering a re-render of the component with the new values.

10. The `convertToTwoDigit` function is a helper function that takes a numerical value and converts it to a two-digit string by using the `padStart` method. It ensures that values like 1 or 9 are displayed as "01" or "09".

11. The JSX code within the `return` statement renders a `div` with the class name "counter" and three `span` elements. These `span` elements display the two-digit formatted values of `time.hours`, `time.minutes`, and `time.seconds` respectively.

12. Finally, the `App` component is exported as the default export of the module, making it available for use in other parts of the application.

*/