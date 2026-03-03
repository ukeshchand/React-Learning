import React from "react";
import Card from "./Components/card";

const App = () => {
const jobOpenings = [
  {
    brandlogo: "https://imgs.search.brave.com/tGDEyDozpFeBJz0-QFE-Q3Luoly9EvRCeHab-rSvDKM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDkvR29vZ2xlLUVt/YmxlbS03MDB4Mzk0/LmpwZw",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    datePosted: "5 days ago",
    tag1: "Full Time · Remote",
    tag2: "Junior",
    payPerHour: "$45/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/RrKWwUk8TRasSVRhznnFiRo_uD1fcfuhflP7UuKJ36s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/NjE3NzE3L3Bob3Rv/L2FwcGxlLWluYy1s/b2dvLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sVTd5SWZQ/OUM0RlRzbmRlQWxu/em5raFowUjhsc1Ni/ODZtd3V0U2M2UmU0/PQ",
    companyName: "Apple",
    jobTitle: "iOS Engineer",
    datePosted: "2 weeks ago",
    tag1: "Full Time · Onsite",
    tag2: "Senior",
    payPerHour: "$70/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/vIXMhvwrO1IvlI6AQJuo5B3QGgHq-FwDpSg4OxlD_54/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
    companyName: "Meta",
    jobTitle: "React Developer",
    datePosted: "10 weeks ago",
    tag1: "Part Time · Remote",
    tag2: "Mid Level",
    payPerHour: "$55/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/RMOZ4iWTIWxmPoRZ7hbmtxyGH7ZlruOIK_ADLlXWVQk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3NzEy/MjQucG5n",
    companyName: "Amazon",
    jobTitle: "Cloud Support Engineer",
    datePosted: "3 days ago",
    tag1: "Full Time · Remote",
    tag2: "Senior",
    payPerHour: "$65/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/JRwqwIendEH5SZgkWkdB_OmWHg0e-bVLh7ngvrH7BjU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2hhdHMtb24tbmV0/ZmxpeC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjYvMDIv/bmV0ZmxpeC13YXJu/ZXItYnJvcy1iaWQt/ZW5kcy03Njh4NDMy/LmpwZw",
    companyName: "Netflix",
    jobTitle: "Backend Engineer",
    datePosted: "1 week ago",
    tag1: "Full Time · Onsite",
    tag2: "Senior",
    payPerHour: "$80/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/U3xD1s3_iqmK5dQPTNjz9XNUdy1PREtNL-YCOLumcRo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L3dpbmRvd3MtbWlj/cm9zb2Z0LWxvZ28t/cG5nLTIxLnBuZw",
    companyName: "Microsoft",
    jobTitle: "Software Engineer",
    datePosted: "6 days ago",
    tag1: "Full Time · Remote",
    tag2: "Junior",
    payPerHour: "$50/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/FRorI_gNkQUgCwUF-ZLNVHMZrJdzsrbbhmtYoQ7W7fk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2UxLzJh/LzY3L2UxMmE2NzIx/ZDUyZTA3OWM1ZTMz/NjMyZjY2ZGRiOGE5/LmpwZw",
    companyName: "Tesla",
    jobTitle: "Automation Engineer",
    datePosted: "4 weeks ago",
    tag1: "Full Time · Onsite",
    tag2: "Mid Level",
    payPerHour: "$60/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/t2BwBRu0yCby49UrklplhPlpFtMHpnA2VGrcgwnHz1Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXQuY29t/L3cvZnVsbC85LzMv/Mi8xMjU1Njk1LTE5/MjB4MTA4MC1kZXNr/dG9wLTEwODBwLW52/aWRpYS13YWxscGFw/ZXItaW1hZ2UuanBn",
    companyName: "NVIDIA",
    jobTitle: "AI Engineer",
    datePosted: "8 days ago",
    tag1: "Part Time · Remote",
    tag2: "Senior",
    payPerHour: "$75/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/BVqbk7BoovRZ-G4LggrymQfesnjBHrQaO0cpQt4SbAY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0yMDIwLXByZXNl/bnQtNzAweDM5NC5w/bmc",
    companyName: "Adobe",
    jobTitle: "UI/UX Designer",
    datePosted: "9 weeks ago",
    tag1: "Full Time · Remote",
    tag2: "Mid Level",
    payPerHour: "$58/hr",
    location: "Kathmandu, Nepal"
  },
  {
    brandlogo: "https://imgs.search.brave.com/_hmpRkXZYPyJcqzxtR_9iK4rdJtX6WwQgVJjarYMPSs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9PcmFjbGVf/RGF0YWJhc2UvT3Jh/Y2xlX0RhdGFiYXNl/LUxvZ28ud2luZS5z/dmc",
    companyName: "Oracle",
    jobTitle: "Database Administrator",
    datePosted: "12 days ago",
    tag1: "Full Time · Onsite",
    tag2: "Junior",
    payPerHour: "$48/hr",
    location: "Kathmandu, Nepal"
  }
];


 console.log(jobOpenings)


  return (
    <div className="parent">
      {jobOpenings.map(function(elem, idx){
        return <div key={idx}><Card Logo={elem.brandlogo} company={elem.companyName} title={elem.jobTitle} brand={elem.brandlogo} datePosted={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} pay={elem.payPerHour} location={elem.location}/></div> 
      })}
    </div>
  );
};

export default App;
