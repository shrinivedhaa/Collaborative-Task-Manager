import React, {useEffect , useState} from 'react'
import urvishpic from "../images/urvish.jpeg"

// import {useNavigate} from "react-router-dom"

const About = () => {

  // const navigate = useNavigate()

  const [userData, setUserData] = useState({})

  const callAboutPage = async() => {
    try{
      const res = await fetch('/about',{
        method: "GET",
        headers:{
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json()
      console.log(data)
      setUserData(data)

      if(!res.status === 200){
        const error = new Error(res.error)
        throw error
      }

    }catch(err){
      console.log(err)
      // navigate('/login')
    }
  } 

  useEffect(() => {
    callAboutPage()
  }, [])
  

  return (
    <>
      <div className="container">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
              <img src={urvishpic} alt="pic" style={{height:150,width:150,marginLeft:200}} />

              </div>
            </div>

            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="profile-rating mt-3 mb-5">Ranking: <span>10/10</span></p>

                <div className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link active" id="profile-tab" data-toggle="tab" href="#profile" role="tab">Timeline</a>
                  </li> */}
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>

          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>Work Links</p>
                <a href="https://github.com/urvishjp">GitHub</a> <br />
                <a href="https://www.linkedin.com/in/urvish-j-p/">LinkedIn</a> <br />
                <a href="https://urvish-portfolio.netlify.app/">Protfolio</a>
              </div>
            </div>

            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.id}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>


                </div>
              </div>

            </div>


          </div>

        </form>
      </div>
    </>
  )
}

export default About