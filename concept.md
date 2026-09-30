# 📝 React Todo App – Complete Revision Notes

---

# 🔰 1. What this App Does

This is a **Todo App** where you can:

* ➕ Add tasks
* ✏️ Edit tasks
* ❌ Delete tasks
* ✅ Mark tasks complete
* 💾 Save tasks in browser (localStorage)

---

# 🧠 2. Core Concept: STATE

## 🔹 todo

* Stores current input value

Example:

```js
todo = "Study JavaScript"
```

---

## 🔹 todos

* Stores all tasks (Array of objects)

Example:

```js
[
  { id: 1, todo: "Study JS", isCompleted: false },
  { id: 2, todo: "Gym", isCompleted: true }
]
```

---

## 🔹 showFinished

* Controls visibility of completed tasks

| Value | Meaning              |
| ----- | -------------------- |
| true  | Show all tasks       |
| false | Hide completed tasks |

---

# ⚙️ 3. useEffect (Runs on Page Load)

```js
useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString){
    let todos = JSON.parse(todoString)
    setTodos(todos)
  }
}, [])
```

👉 Loads saved todos when app starts

---

# 💾 4. localStorage Concept

## Save:

```js
localStorage.setItem("todos", JSON.stringify(todos))
```

## Load:

```js
JSON.parse(localStorage.getItem("todos"))
```

---

# ⚠️ 5. Important Fix

```js
const saveToLS = (newTodos) => {
  localStorage.setItem("todos", JSON.stringify(newTodos))
}
```

👉 Always pass updated data

---

# ➕ 6. Add Todo

```js
const handleAdd = () => {
  let newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }]
  setTodos(newTodos)
  setTodo("")
  saveToLS(newTodos)
}
```

---

# ❌ 7. Delete Todo

```js
const handleDelete = (e, id) => {
  let newTodos = todos.filter(item => item.id !== id)
  setTodos(newTodos)
  saveToLS(newTodos)
}
```

---

# ✏️ 8. Edit Todo

```js
const handleEdit = (e, id) => {
  let t = todos.filter(i => i.id === id)
  setTodo(t[0].todo)

  let newTodos = todos.filter(item => item.id !== id)
  setTodos(newTodos)
  saveToLS(newTodos)
}
```

---

# ☑️ 9. Checkbox (Complete Task)

```js
const handleCheckbox = (e) => {
  let id = e.target.name
  let index = todos.findIndex(item => item.id === id)

  let newTodos = [...todos]
  newTodos[index].isCompleted = !newTodos[index].isCompleted

  setTodos(newTodos)
  saveToLS(newTodos)
}
```

---

# 👁️ 10. Show / Hide Completed

```js
const toggleFinished = () => {
  setshowFinished(!showFinished)
}
```

---

# 🧩 11. JSX (VERY IMPORTANT 🔥)

👉 JSX = HTML + JavaScript inside React

Example:

```jsx
<div>Hello</div>
```

---

## 🔥 JavaScript inside JSX → `{ }`

👉 Whenever you use `{ }` inside `< >`, you are writing JavaScript

---

## ✅ Example 1: Variable inside JSX

```jsx
<div>{todo}</div>
```

👉 Meaning:

* Show value of `todo`

---

## ✅ Example 2: Condition

```jsx
{todos.length === 0 && <div>No Todos</div>}
```

👉 Meaning:

* If no todos → show message

---

## ✅ Example 3: Loop (map)

```jsx
{todos.map(item => (
  <div>{item.todo}</div>
))}
```

👉 Meaning:

* Loop through all todos
* Show each item

---

## ✅ Example 4: Condition inside map

```jsx
(showFinished || !item.isCompleted)
```

👉 Meaning:

* Show item only if:

  * showFinished = true
    OR
  * item is not completed

---

## ✅ Example 5: Dynamic class

```jsx
<div className={item.isCompleted ? "line-through" : ""}>
```

👉 Meaning:

* If completed → apply line-through

---

## ✅ Example 6: Event handling

```jsx
<button onClick={handleAdd}>Save</button>
```

👉 Meaning:

* On click → run function

---

## ✅ Example 7: Input handling

```jsx
<input onChange={handleChange} value={todo} />
```

👉 Meaning:

* When user types → update state

---

# 🖥️ 12. Rendering Logic

```jsx
{todos.map(item=>{
  return (showFinished || !item.isCompleted) && (
    <div>{item.todo}</div>
  )
})}
```

👉 Meaning:

* Loop todos
* Apply condition
* Render UI

---

# 🔁 13. Full Flow

```
User types → todo state
       ↓
Click Save → handleAdd
       ↓
Update todos array
       ↓
Save to localStorage
       ↓
UI updates (JSX re-renders)
       ↓
Refresh → useEffect loads data
```

---

# 🧠 Easy Memory Trick

* `todo` → current input
* `todos` → database
* `setTodos` → update database
* `{ }` → JavaScript inside HTML
* JSX → UI rendering

---

# 🚀 Final Tip

👉 Always remember:

* `{}` = JavaScript inside JSX
* React updates UI automatically when state changes
* Never modify state directly

---

💡 Revise this once daily — your React will become strong very fast.
