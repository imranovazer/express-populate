import { useEffect, useState } from "react";
import { Table } from "reactstrap"
import axios from "axios"

import moment from "moment"



function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/api/books").then(e => {
      setData(e.data.data);
      console.log(e);
    })

  }, [])


  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Book list</h1>
      <Table>
        <thead>
          <tr>
            <th>
              ID
            </th>
            <th>
              Name
            </th>
            <th>
              PublishDate
            </th>
            <th>
              AddDate
            </th>
          </tr>


        </thead>
        <tbody>
          {data && data.map((e, i) => <tr>
            <td>{i}</td>
            <td>{e.name}</td>
            <td>{`${moment(e.publishDate).format("MMM Do Y")}`}</td>
            <td>{`${moment(e.addDate).format("MMM Do Y")}`}</td>
          </tr>)}


        </tbody>


      </Table>
    </div>
  );
}

export default App;
