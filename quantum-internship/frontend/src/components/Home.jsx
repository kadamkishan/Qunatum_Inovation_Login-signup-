import React from "react";

const Home = () => {


  return (
    <div className="p-5">
      <table className="table">
        <thead >
          <tr>
            <th scope="col" >#</th>
            <th scope="col">Name</th>
            <th scope="col">Date Created</th>
            <th scope="col">Role</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="fw-semibold ">
          <tr >
            <th scope="row" className="p-2">1</th>
            <td ><img src={"https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"} width="50" height="50" className="rounded-circle" alt="..."/> <span className="ms-2">Michel Holtz</span></td>
            <td>04/10/2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="blue" className="bi bi-gear-fill opacity-50" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg></span>

            </td>
          </tr>

          <tr>
            <th scope="row">2</th>
            <td><img src={"https://media.istockphoto.com/id/1158298318/photo/studio-portrait-of-blonde-teen-girl-on-black-background.webp?b=1&s=170667a&w=0&k=20&c=ZFAArMb1PiOn8CJI--QNCJiNrMXhL4k3n2gnThCsMUU="} width="50" height="50" className="rounded-circle" alt="..."/> <span className="ms-2">Paula Wilson</span></td>
            <td>05/08/2014</td>
            <td>Publisher</td>
            <td>Active</td>
            <td>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="blue" className="bi bi-gear-fill opacity-50" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg></span>
            </td>

          </tr>
          <tr>
            <th scope="row">3</th>
            <td> <img src={"https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg"} width="50" height="50" className="rounded-circle" alt="..."/> <span className="ms-2">Antio Wilson</span></td>
            <td>05/08/2014</td>
            <td>Publisher</td>
            <td>Suspended</td>
            <td>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="blue" className="bi bi-gear-fill opacity-50" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg></span>
            </td>

          </tr>

          <tr>
            <th scope="row">4</th>
            <td><img src={"https://media.istockphoto.com/id/1444427249/photo/attractive-blonde-lady-at-studio-shot-from-side.jpg?b=1&s=170667a&w=0&k=20&c=H_IprlV5xox--vC7AKdUCc200r4wbhhsOO_TFmu0Oh4="} width="50" height="50" className="rounded-circle" alt="..."/> <span className="ms-2">Paula Wilson</span></td>
            <td>05/08/2014</td>
            <td>Publisher</td>
            <td>Active</td>
            <td>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="blue" className="bi bi-gear-fill opacity-50" viewBox="0 0 16 16">
                <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                </svg></span>

                <span><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg></span>
            </td>

          </tr>
        </tbody>
      </table>

        <nav aria-label="Page navigation example" className="d-flex  me-5 justify-content-end">
        <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
        </nav>
    </div>
  );
};

export default Home;
