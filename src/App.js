import Circle from './components/Circle';
import './App.css';

function App() {
  return (
    <div>
      <Circle/>

    </div>
   );
}

export default App;



/*
[2:02 PM] Priyanka Goyal
Task: Implement an Interactive Circle Drawer in React

Objective: Develop a React application that allows users to draw circles on a designated canvas 

area by clicking. Each circle’s radius and color should be randomly generated. The application 

should visually indicate when circles overlap by changing their colors.

Requirements:

1. Canvas Setup: Implement a canvas area where circles will be drawn. This area should 

handle up to 50+ circles efficiently.

2. Circle Placement and Properties: Generate circles at the mouse click position with 

random radii between 10px and 50px. Assign random colors to each circle initially.

3. Overlap Detection: Circles should change to a predefined color (e.g., red) when they 

overlap with one another.

4. State Management: Use appropriate state management techniques to track and update 

the positions and properties of all circles.

5. Performance: Ensure the application remains responsive and efficient as circles are 

added and overlap calculations are performed.

6. User Interface: Provide a clear and intuitive user interface with instructions on how to 

add circles and an indication of when circles are overlapping.

Evaluation Criteria:

 Code quality and clarity

 Efficiency of overlap detection algorithm

 Adherence to React best practices for state management and component structure

 Responsiveness and usability of the final application

This test will assess the candidate's skills in React fundamentals, state management, and their 

ability to implement interactive and performant web components.




*/