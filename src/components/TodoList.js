// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'

// function TodoList() {
//   const [todos, setTodos] = useState([])
//   // const [formData,setFormData]=useState({})
//   let task;



//   useEffect(() => {
//     fetch(" http://localhost:3000/todos")
//       .then((r) => r.json())
//       .then((data) => { setTodos(data) })
//   }, []);

//   function handleClick(e) {
//     let id = parseInt(e.target.id)
//     console.log(typeof (id))
//     const delTodo = todos.filter((to) => {
//       console.log(to)
//       return (
//         to.id !== id

//       )
//     });
//     setTodos([...delTodo])
//     console.log(delTodo)

//   }

//   function handleChange(event) {
//     // event.target.value();
//     console.log(event.target.value)
//     task = event.target.value

//   }
//   console.log(task)


//   function handleSubmit(event) {
//     event.preventDefault();
//     let myTask = {
//       // id:3,
//       tasks: task,
//       completed: true
//     }
//     console.log(myTask)
//     //  setFormData((formData)=>({...myTask}))

//     fetch("http://localhost:3000/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(myTask),

//     })
//       .then((r) => r.json())
//       .then((data) => { setTodos([...todos, data]) })

//   }
//   // console.log(formData)




//   function addForm() {
//     return (
//       <form onSubmit={handleSubmit}>
//         <input className='input' onChange={handleChange} type="text" placeholder='Enter your task' />
//         {/* <input type="text" placeholder='Enter your task'/> */}
//         <button className='btn'>Submit</button>

//       </form>
//     )
//   }



//   return (
//     <div className="todo-container">
//       <h1>My ToDos</h1>
//       <div><h2>Tasks List</h2></div>
//       {addForm()}
//       <div>
//         <ul className='ul'>
//           {todos.map(todo => (
//             <li className='ulli' key={todo.id}>
//               {todo.tasks} {todos.completed}
//               <button onClick={handleClick} id={todo.id}>completed</button>
//             </li>

//           ))}
//         </ul>
//       </div>

//       <Link to="/">Click to return to our Home page</Link>
//     </div>
//   )
// }

// export default TodoList
