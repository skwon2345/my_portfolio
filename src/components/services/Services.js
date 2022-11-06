import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi';


const Services = () => {
  const data = [
    {
      id: "1",
      company:"Alcumus", 
      role: "Devops Engineer",
      location:"Toronto, Canada", 
      date: "2022 May - 2022 Sep", 
      details: [
        "Implemented Terraform code to automatically create Azure Devops resources.",
        "Used Power Automate to Run Terraform code through Microsoft Teams messages.",
        "Create and manage Azure Devops Pipeline and Variable Groups.",
        "Debug Helm chart for company's private K8S cluster."
      ]
    },
    {
      id: "2",
      company:"HITS", 
      role: "Software Engineer",
      location:"Seoul, South Korea", 
      date: "2021 Jun - 2021 Nov", 
      details: [
        "Built CI/CD Pipeline using GitHub Action(CI) and AWS Code Deploy(CD) to improve work efficiency.",
        "Implemented backend server using Django.",
        "Created employers' AWS IAM User management tool with Terraform (IaC) to manage new employers access right on AWS easily.",
        "Developed API test code and customize test commands by overriding Django's BaseCommand class to test the latest code automatically to keep code bug-free."
      ]
    }
  ];
  return (
    <section id="services">
      <h5>Where I worked</h5>
      <h2>Work Experience</h2>

      <div className='container services__container'>
        {
          data.map(({id, company, role, location, date, details}) => {
            return (
              <article key={id} className='service'>
                <div className='service__head'>
                  <h3>{company}</h3>
                  <div className='service__detail'>
                    <div className='service__detail-role'>
                      <h4>{role}</h4>
                    </div>
                    <div className='service__detail-info'> 
                      <h4>{location}</h4>
                      <small className='text-light'>{date}</small>
                    </div>

                  </div>
                </div>
                <ul className='service__list'>
                  {
                    details.map((detail) => {
                      return (
                      <li>
                        <BiCheck className="service__list-icon"/>
                        <p>{detail}</p>
                      </li>
                      )
                    })
                  }
                  
                </ul>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Services