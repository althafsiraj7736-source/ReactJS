// import React from 'react'

const App = () => {
  const pageScrolling = (elem) => {
    if(elem>0){
      console.log('scroll down')
    } else {
      console.log('scroll up')
    }
    console.log('scrolling.. at speed.', elem)
  }

  return (
    <div onWheel={(elem) => {
      console.log();
      pageScrolling(elem.deltaY)
    }}>
      <div className="bg-gray-500 w-full h-screen">Page1</div>
      <div className="bg-gray-700 w-full h-screen">Page2</div>
      <div className="bg-gray-900 w-full h-screen">Page3</div>
    </div>
  )
}

export default App