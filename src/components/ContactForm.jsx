import React from "react";

const ContactForm = () => {
  return (
    <>
      <br />
      <div className="container">
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Din Email</label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput1">Namn</label>
            <input
              type="name"
              className="form-control"
              placeholder="Fullständigt namn"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Ditt meddelande</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="container text-center">
            <button className="btn btn-primary">Skicka ditt meddelande</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
