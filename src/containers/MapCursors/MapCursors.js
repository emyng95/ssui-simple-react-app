import React, { Component } from "react";
import { Link } from "react-router-dom";
import appRoutes from "../../shared/appRoutes";
import { sortBy } from "lodash"; // can be taken out

import "./MapCursors.css";
import cursor from "../../assets/imgs/mapcursor.png"


class MapCursors extends Component {
  state = {
    mapcursor:[
      {
        id:"taipei-101",
        title:"Taipei 101",
        hover:false,
      },
      {
        id:"jiufen",
        title:"Jiufen",
        hover:false,
      },
      {
        id:"sun-moon-lake",
        title:"Sun Moon Lake",
        hover:false,
      },
      {
        id:"ali-mountain",
        title:"Ali Mountain",
        hover:false,
      },
      {
        id:"kenting",
        title:"Kenting",
        hover:false,
      },
      {
        id:"taroko-gorge",
        title:"Taroko Gorge",
        hover:false,
      }

      


    ]
  };

 

  render() {
    // let { chars } = this.state;
    // chars = sortBy(chars, ["rank"]);

    
    

    return (
      <div className="map-container">
          {this.state.mapcursor.map((mapcursor, idx) => {
            return (
              <Link
                key={idx} //required attribute from warning
                to={`${appRoutes.location}/${mapcursor.id}`}
                // className=""
                id={`link-${mapcursor.id}`}
              >
                <p id={`title-${mapcursor.id}`}>{mapcursor.title}</p>
                <img className="mapcursor" id={mapcursor.id} src={cursor} alt={mapcursor.title} /> 
              </Link>
            );
          })}
      </div>
    );
  }
}

export default MapCursors;
