
const App = () => {
  const user = {
    username: 'Althaf',
    age: 25,
    city: 'New York'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const storedUser = JSON.parse(localStorage.getItem('user'))
  console.log(storedUser);
  

  return (
    <div>
      hello
    </div>
  )
}

export default App