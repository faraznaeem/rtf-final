import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className="container">
      <div class="card mb-3">
        <img
          class="card-img-top img-fluid"
          src={props.service.image}
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{props.service.name}</h5>
          <p class="card-text">{props.service.description}</p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard
