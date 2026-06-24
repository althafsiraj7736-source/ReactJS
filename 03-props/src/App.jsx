import Card from "./components/Card"

const App = () => {
  return (
    <>
    <div className="parent">
      <Card user='John Doe' age={23} img='https://images.unsplash.com/photo-1780211662775-fd0ab461fe0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8'/>
      <Card user='Jane Smith' age={28} img='https://images.unsplash.com/photo-1773332611528-566f16120979?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D'/>
      <Card user='Bob Johnson' age={35} img='https://images.unsplash.com/photo-1779896412124-9d2711feda0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
    </>
  )
}

export default App
