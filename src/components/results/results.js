import React from "react";
import "./results.css";

function Results(props) {
  return (


    <table className="table table-striped table-hover">
    <thead>
  <tr>
    <th scope="col">Image</th>
    <th scope="col" onClick={props.handleSortChange}>Name {props.filterAsc && <span><i class="bi bi-sort-up"></i></span>} {!props.filterAsc && <span><i class="bi bi-sort-down"></i></span>} </th>
    <th scope="col">Phone</th>
    <th scope="col">Email</th>
    <th scope="col">DOB</th>
  </tr>
</thead>
<tbody>
{props.results.map(result => (
  <tr key={result.Email}>
    <th scope="row"> <img alt="Person" src={result.Image} className="img-fluid" /></th>
    <td>{result.Name}</td>
    <td>{result.Phone}</td>
    <td>{result.Email}</td>
    <td>{result.DOB}</td>
  </tr>
))}
</tbody>

</table>

  );
}

export default Results;