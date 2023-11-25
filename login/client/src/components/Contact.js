import React ,{useState , useEffect} from "react";

const Contact = () => {

  const [userData, setUserData] = useState({})

  const userContact = async() => {
    try{
      const res = await fetch('/getdata',{
        method: "GET",
        headers:{
          "Content-Type": "application/json"
        },

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
    userContact()
  }, [])

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-around">
              <div className="contact_info_item d-flex justify-content-lg-start align-items-center mt-3">
                <div
                  className="contact_info_contact"
                  style={{
                    border: 2,
                    color:'white',
                    backgroundColor: "#0d6efd",
                    borderRadius: 3,
                  }}
                >
                  <div className="contact_info_title">Phone No.</div>
                  <div className="contact_info_text">7348934092</div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-lg-start align-items-center mt-3">
                <div
                  className="contact_info_contact"
                  style={{
                    border: 2,
                    color:'white',
                    backgroundColor: "#0d6efd",
                    borderRadius: 3,
                  }}
                >
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">
                    urvishmeghani111@gmail.com
                  </div>
                </div>
              </div>
              <div className="contact_info_item d-flex justify-content-lg-start align-items-center mt-3">
                <div
                  className="contact_info_contact"
                  style={{
                    border: 2,
                    color:'white',
                    backgroundColor: "#0d6efd",
                    borderRadius: 3,
                  }}
                >
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Ahmedabad, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <>
          {/*Section: Contact v.2*/}
          <section className="mb-4 mt-5">
            {/*Section heading*/}
            <h2 className="h1-responsive font-weight-bold text-center my-4">
              Get in Touch
            </h2>
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-9 mb-md-0 mb-5">
                <form
                  id="contact-form"
                  name="contact-form"
                  action="mail.php"
                  method="POST"
                >
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                        />
                        <label htmlFor="name" className="">
                          Your name
                        </label>
                      </div>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-control"
                        />
                        <label htmlFor="email" className="">
                          Your email
                        </label>
                      </div>
                    </div>
                    {/*Grid column*/}
                  </div>
                  {/*Grid row*/}
              
                  {/*Grid row*/}
                  <div className="row">
                    {/*Grid column*/}
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea
                          type="text"
                          id="message"
                          name="message"
                          rows={2}
                          className="form-control md-textarea"
                          defaultValue={""}
                        />
                        <label htmlFor="message">Your message</label>
                      </div>
                    </div>
                  </div>
                  {/*Grid row*/}
                </form>
                <div className="text-center text-md-left">
                  <a
                    className="btn btn-primary"
                    onClick="document.getElementById('contact-form').submit();"
                  >
                    Send
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*Section: Contact v.2*/}
        </>
      </div>
    </>
  );
};

export default Contact;
