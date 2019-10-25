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
        clicked:false,
      },
      {
        id:"jiufen",
        title:"Jiufen",
        clicked:false,
      },
      {
        id:"sun-moon-lake",
        title:"Sun Moon Lake",
        clicked:false,
      },
      {
        id:"ali-mountain",
        title:"Ali Mountain",
        clicked:false,
      },
      {
        id:"kenting",
        title:"Kenting",
        clicked:false,
      },
      {
        id:"taroko-gorge",
        title:"Taroko Gorge",
        clicked:false,
      }


    ]
  };

  render() {
    // let { chars } = this.state;
    // chars = sortBy(chars, ["rank"]);

    return (
      <div className="map-container">
          {this.state.mapcursor.map((mapcursor, idx) => {
              console.log(mapcursor); // mapcursors.map(one of location) // map is a way  of for loop thru array.
              console.log(idx);
            return (
              <Link
                key={idx} //required attribute from warning
                to={`${appRoutes.location}/${mapcursor.id}`}
                // className=""
                id={`link-${mapcursor.id}`}
              >
                <p>{mapcursor.title}</p>
                <img className="mapcursor" id={mapcursor.id} src={cursor} alt={mapcursor.title} /> 
              </Link>
            );
          })}
      </div>
    );
  }
}

export default MapCursors;
