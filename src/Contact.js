import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="container white z-depth-4 center padding margin-top">
      <div className="col s12">
        <h3>Let's Get In Touch!</h3>
      </div>
      <div>
        <form action="https://formspree.io/jegierlach@gmail.com" method="POST">
          {/* This row contains the name fields on the same line*/}
          <div className="row">
            <div className="input-field col s6">
              <label htmlFor="firstName">first name</label>
              <input id="firstName" type="text" name="name" />
            </div>
            <div className="input-field col s6">
              <label htmlFor="lastName">last name</label>
              <input id="lastName" type="text" name="name" />
            </div>
          </div>
          {/* This row contains the email field*/}
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="email">email</label>
              <input
                id="email"
                className="validate"
                type="email"
                name="_replyto"
              />
            </div>
          </div>
          {/* This row contains the message textarea */}
          <div className="row">
            <div className="input-field col s12">
              <label htmlFor="textarea">message</label>
              <textarea
                id="textarea"
                className="materialize-textarea"
                type="text"
                name="message"
              />
            </div>
          </div>
          {/* This is the submit button */}
          <button
            className="btn waves-effect waves-light"
            type="submit"
            value="Send"
          >
            Send
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
