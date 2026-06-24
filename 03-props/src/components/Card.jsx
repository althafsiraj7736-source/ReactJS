
const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
    <img src={props.img} alt="" />
    <h1> {props.user} </h1>
    <p>Age: {props.age}</p>
    <p>So if you're comfortable using Git and npm from the terminal, you'll feel at home with Ruflo. </p>
    <button>View Profile</button>
    </div>
  )
}

export default Card
