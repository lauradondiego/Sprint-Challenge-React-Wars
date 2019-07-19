import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.scss";
import { CardExampleCard } from "./Cards";

const StarWarsData = () => {
  const [data, setData] = useState([]);
  //name is the array of objects
  console.log(data);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?format=json`).then(response => {
      setData(response.data.results);

      //   console.log(response.data);
      console.log("characters object", setData);
    });
  }, []);

  // the [] means you only want it it to load once/

  return (
    <div className="App">
      {data && data.map(char => <CardExampleCard char={char} />)}
      {/* {data.map(char => char.eye_color)} */}
      {/* {data[0] ? <p>{data[0].name}</p> : null}
      {/* if data[0] exists, then return the p tag. if not, then return null. it is asynchronous so it takes time to show up on the page */}
      {/* {data[1] ? <p>{data[1].name}</p> : null}
      {data[2] ? <p>{data[2].name}</p> : null}
      {data[3] ? <p>{data[3].name}</p> : null}
      {data[4] ? <p>{data[4].name}</p> : null}
      {data[5] ? <p>{data[5].name}</p> : null}
      {data[6] ? <p>{data[6].name}</p> : null}
      {data[7] ? <p>{data[7].name}</p> : null}
      {data[8] ? <p>{data[8].name}</p> : null}
      {data[9] ? <p>{data[9].name}</p> : null}
      {data[0] ? <p>{data[0].eye_color}</p> : null}
      {data[1] ? <p>{data[1].eye_color}</p> : null}
      {data[2] ? <p>{data[2].eye_color}</p> : null}
      {data[3] ? <p>{data[3].eye_color}</p> : null}
      {data[4] ? <p>{data[4].eye_color}</p> : null}
      {data[5] ? <p>{data[5].eye_color}</p> : null}
      {data[6] ? <p>{data[6].eye_color}</p> : null}
      {data[7] ? <p>{data[7].eye_color}</p> : null}
      {data[8] ? <p>{data[8].eye_color}</p> : null}
      {data[9] ? <p>{data[9].eye_color}</p> : null} */}{" "}
      */}
      {/* <span>{name[0].name}</span> */}
      {/* we defined date in line 7 */}
      {/* {name.map(x => ( */}
      {/* // <CardComponent //component */}
      {/* key={x.name} // prop - use key bc react will cause errors it needs to grab a key
          myData={x.name} // creates 7 NumberButton components in a new array
        // />
      ))} */}
    </div>
  );
};
export default StarWarsData;
