import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser/es';
import logo from './logo.svg';
import './App.css';
import './mediaBreakpoints.css';
import grayArrow from "./media/gray-arrow.png";
import whiteArrow from "./media/white-arrow.png";


function App() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preference, setPreference] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [completionDate, setCompletionDate] = useState("");
  const [buttonClass, setButtonClass] = useState("reach-out-button");
  const [buttonText, setButtonText] = useState("Send It");
  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    const errorsObj = {};
    if (name.length === 0) errorsObj.name = "error";
    if (email.length === 0) errorsObj.email = "error";
    if (phone.length === 0) errorsObj.phone = "error";
    if (message.length === 0) errorsObj.message = "error";
    setErrors(errorsObj);

  }, [name, email, phone, message]);


  const handleButton = () => {
    setButtonClass("reach-out-button-sent");
    setButtonText("Sent!");

    setTimeout(() => {
      setButtonClass("reach-out-button");
      setButtonText("Send It")
    }, 3000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (Object.values(errors).length === 0) {
      emailjs.sendForm('service_9k9k7kn', 'template_2r63new', form.current, 'vdYMyjgLbJ0XXfGXs');

      handleButton();
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setBudget("");
      setCompletionDate("");
      setErrors({});
      setHasSubmitted(false);
      setMessageSent(true);
    }
  }


  return (
    <>
      <div className="section-1">
        <div className='hero-heading'>
          <h2>
            Harnesing the <br />
            power of creativity <br />
            to inspire, uplift, and <br />
            brighten the world.
          </h2>
        </div>
      </div>
      <div className="section-2">
        <div className='company-heading'>
          <h1>
            Cleghorn Creative
          </h1>
        </div>
      </div>
      <div className="section-3">
        <div className="services">
          <div className="services-group-1">
            <h4>Campaign</h4>
            <p>Concept + Design</p>
            <p>Event Collateral</p>
            <p>Social Media Assets</p>
          </div>
          <div className="services-group-2">
            <h4>Branding</h4>
            <p>Brand Strategy</p>
            <p>Naming</p>
            <p>Visual Identity + Logo</p>
            <p>Brand Guidelines</p>
            <p>Print Collateral</p>
            <p>Digital Collateral</p>
            <p>Packaging</p>
          </div>
          <div className="services-group-3">
            <h4>Content</h4>
            <p>Product Videography + Photography</p>
            <p>Animation</p>
            <p>Media Editing</p>
            <p>Data Visualization + Infographics</p>
            <p>Presentation Design</p>
            <h4 className='lower-services'>Web</h4>
            <p>Frontend Web Development</p>
            <p>Mobile Application Development</p>
            <p>Accessibility Compliance</p>
            <p>Backend Integration</p>
            <p>E-Commerce Integration</p>
          </div>
        </div>
      </div>
      <div className="section-4">
        {messageSent ? (
          <div className="contact-form-sent">
            <h5>Thanks for sharing.</h5>
            <div className="contact-form-text">
              <p>
                We’ve received your information and are excited to learn
                more about your vision. Our team will review your details carefully and reach out within 72 hours to discuss your project further.
              </p>
              <p>
                In the meantime, if you have any questions or additional
                ideas to share, please don’t hesitate to contact us.
                We look forward to collaborating with you to bring
                your creative vision to life!
              </p>
            </div>
            <a className="email-link desktop" href="mailto:ashleigh@cleghorn-creative.com">
              ashleigh@cleghorn-creative.com
            </a>
            <a className="email-link desktop" href="mailto:caleb@cleghorn-creative.com">
              caleb@cleghorn-creative.com
            </a>
            <a className='meeting-button desktop' href="https://calendly.com/cleghorn-creative/30-minute-meeting?preview_source=et_card&month=2024-11" target='_blank' rel='noreferrer'>
              <p>Schedule a Meeting</p>
              <img src={grayArrow} alt="arrow" />
            </a>
          </div>
        ) : (
          <div className="contact-form-pre">
            <svg
              width="100" height="100"
              viewBox="0 0 230 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='mobile'
            >
              <path
                d="M169.2 162L134 187.2L94.8 135.6L56.8 187.2L20.8 162L59.2 107.6L0.800001 89.2L14 48.8L71.2 67.2V0.399986H118.4V67.2L175.6 48.8L190 89.2L130.8 107.6L169.2 162Z"
                stroke="#3F3F3F"
                strokeWidth="0.3rem" />
            </svg>
            <h5>Let's talk next steps.</h5>
            <form onSubmit={sendEmail} ref={form}>
              <div className='input-row'>
                <div className={`input ${hasSubmitted ? errors.name : ""}`}>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <p>*</p>
                </div>
                <div className={`input ${hasSubmitted ? errors.email : ""}`}>
                  <input
                    type="text"
                    name="Email"
                    id="Email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <p>*</p>
                </div>
              </div>
              <div className='input-row'>
                <div className={`input ${hasSubmitted ? errors.phone : ""}`}>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <p>*</p>
                </div>
                <div className='input'>
                  <input
                    type="text"
                    name="preference"
                    id="preference"
                    placeholder="Contact Preference"
                    value={preference}
                    onChange={(e) => setPreference(e.target.value)}
                  />
                  <p>*</p>
                </div>
              </div>
              <textarea
                className={`input ${hasSubmitted ? errors.message : ""}`}
                rows="6"
                placeholder="Tell us more about your project"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className='input-row'>
                <div className='input'>
                  <input
                    type="text"
                    name="budget"
                    id="budget"
                    placeholder="Project Budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
                <div className='input'>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="Estimated Project Completion Date"
                    value={completionDate}
                    onChange={(e) => setCompletionDate(e.target.value)}
                  />
                </div>
                <button
                  className='submit-button'
                  disabled={hasSubmitted && Object.values(errors).length !== 0}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <div className="section-5">
        <div className='contact-section'>
          <div className='hr-row'>
            <hr />
            <hr />
          </div>
          <div className="contact-section-center">
            <div className="contact-section-left">
              <a className='meeting-button' href="https://calendly.com/cleghorn-creative/30-minute-meeting?preview_source=et_card&month=2024-11" target='_blank' rel='noreferrer'>
                <p>Schedule a Meeting</p>
                <img src={whiteArrow} alt="arrow"/>
              </a>
              <h6>Contact</h6>
              <a className="email-link" href="mailto:ashleigh@cleghorn-creative.com">
                ashleigh@cleghorn-creative.com
              </a>
              <a className="email-link" href="mailto:caleb@cleghorn-creative.com">
                caleb@cleghorn-creative.com
              </a>
            </div>
            <div className='hr-column'>
              <hr />
              <hr />
            </div>
            <div className="contact-section-right desktop">
              <div className="contact-section-text">
                <p>
                  We are dedicated to providing each client with designs is a collaborative journey, where both the client and designer play an important role.
                </p>
                <p>
                  Our goal extends beyond meeting your project requirements; we want to make the design process enjoyable and rewarding for you. We’re excited to embark on this journey together to create something truly incredible.
                </p>
              </div>
              <svg
                width="186" height="186"
                viewBox="0 0 190 190"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M169.2 162L134 187.2L94.8 135.6L56.8 187.2L20.8 162L59.2 107.6L0.800001 89.2L14 48.8L71.2 67.2V0.399986H118.4V67.2L175.6 48.8L190 89.2L130.8 107.6L169.2 162Z" fill="#EEEEEE" />
              </svg>

            </div>
          </div>
          <div className='hr-row'>
            <hr />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
