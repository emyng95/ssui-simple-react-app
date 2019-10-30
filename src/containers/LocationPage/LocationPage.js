import React from "react";
import { useParams } from "react-router";
import locationList from "../LocationPage/locationList";
import "./LocationPage.css";

const LocationPage = () => {
  const { id } = useParams();
  const location = locationList.filter(char => char.id === id)[0];
  const { name, photo, experience, fact1, fact2, fact3 } = location;

  return (
    <div className="container">
      <div className="HalfPageLeft">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <img id={`bg-${id}`} src={photo} alt={name} />
            </div>
        <div className="col-lg-6 col-md-6 col-sm-6 FunFact" id="fact1">
            <div className="Fact">{fact1}</div>  
            <div className="Circle"></div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 FunFact" id="fact2">
            <div className="Circle"></div>
            <div className="Fact">{fact2}</div>  
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 FunFact" id="fact3">
            <div className="Fact">{fact3}</div>  
            <div className="Circle"></div>
        </div>

        </div>
      </div>

      <div className="HalfPageRight">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="LocationContent">
                <div className="CenterText">
                    <h1 className="LocationName">{name}</h1>
                    {experience.map((p,idx) => {
                        return <p key={idx} className="Description">{p}</p>
                    })}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
