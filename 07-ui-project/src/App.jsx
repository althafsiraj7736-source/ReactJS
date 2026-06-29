// import React from 'react'

import Section1 from "./components/section1/Section1.jsx"
import Section2 from "./components/section2/Section2.jsx"
const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
      color:'purple',
      intro: '',
      tag: 'Satisfied'
    }, {
      img: 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      color: 'green',
      intro: '',
      tag: 'UnderServed'
    }, {
      img: 'https://plus.unsplash.com/premium_photo-1661766513512-c32d32da0c06?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      color: 'red',
      intro: '',
      tag: 'Underbanked'
    },{
      img: 'https://images.unsplash.com/photo-1759593218431-6f1585bc14de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      color: 'blue',
      intro: '',
      tag: 'Average'
    },{
      img: 'https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
      color: 'black',
      intro: '',
      tag: 'Satisfied'
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
