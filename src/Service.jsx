import React from "react";
import Card from "./Card";
import ServiceData from "./ServiceData";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {ServiceData.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} description={val.description} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
