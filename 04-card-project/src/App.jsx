// import React from 'react'
import Cards from "./components/Cards";

const App = () => {
    const jobOpenings = [
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=google.com",
        company: "Google",
        datePosted: "3 days ago",
        post: "Software Engineer",
        tag1: "Full-time",
        tag2: "Junior Level",
        pay: "$58/hr",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com",
        company: "Microsoft",
        datePosted: "1 week ago",
        post: "Frontend Developer",
        tag1: "Full-time",
        tag2: "Junior Level",
        pay: "$52/hr",
        location: "Hyderabad, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com",
        company: "Amazon",
        datePosted: "5 days ago",
        post: "Backend Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: "$70/hr",
        location: "Mumbai, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=meta.com",
        company: "Meta",
        datePosted: "2 weeks ago",
        post: "React Developer",
        tag1: "Part-time",
        tag2: "Junior Level",
        pay: "$65/hr",
        location: "Remote"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=apple.com",
        company: "Apple",
        datePosted: "4 days ago",
        post: "iOS Developer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: "$78/hr",
        location: "Bangalore, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com",
        company: "Netflix",
        datePosted: "10 days ago",
        post: "Cloud Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: "$82/hr",
        location: "Chennai, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=nvidia.com",
        company: "NVIDIA",
        datePosted: "3 weeks ago",
        post: "AI Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: "$95/hr",
        location: "Pune, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=openai.com",
        company: "OpenAI",
        datePosted: "6 days ago",
        post: "Machine Learning Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: "$110/hr",
        location: "Remote"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=adobe.com",
        company: "Adobe",
        datePosted: "8 days ago",
        post: "Full Stack Developer",
        tag1: "Full-time",
        tag2: "Junior Level",
        pay: "$60/hr",
        location: "Noida, India"
    },
    {
        brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=salesforce.com",
        company: "Salesforce",
        datePosted: "5 weeks ago",
        post: "DevOps Engineer",
        tag1: "Full-time",
        tag2: "Senior Level",
        pay: "$75/hr",
        location: "Hyderabad, India"
    }
    ];
    

  return (
    <>
    <div className='parent'>
        {jobOpenings.map(function(elem,idx){
            return <div key={idx}>
                <Cards key={idx} company ={elem.company} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} img={elem.brandLogo} date={elem.datePosted}/>
            </div>
            

        })}
    </div>
    </>
  )
}

export default App
