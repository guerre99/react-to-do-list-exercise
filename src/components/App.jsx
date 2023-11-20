import { useState } from 'react'
import Form from 'react-bootstrap/Form'

const tasks = []

function App() {
  const [addTask, setAddTask] = useState('')
  return (
    <div className="App">
      <Form.Control
        className="task-add"
        type="text"
        value={addTask}
        placeholder="Add TO DO..."
        onChange={(e) => {
          setAddTask(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            tasks.push(addTask)
            setAddTask('')
          }
        }}
      />
      {tasks.map((task) => (
        <ul>{task}</ul>
      ))}
    </div>
  )
}

export default App
