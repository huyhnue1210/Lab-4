import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div>
      <div className="b-example-divider" />
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
               <img src="https://vinschool.edu.vn/wp-content/uploads/2022/03/22/logovins.png" alt="X" width={60} height={35}></img>
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">© 2024 VinSchool, Inc</span>
          </div>
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/900px-2023_Facebook_icon.svg.png" alt="Facebook" width={35} height={35} /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="Instagram" width={35} height={35} /></a></li>
            <li className="ms-3"><a className="text-body-secondary" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/300px-GitHub_Invertocat_Logo.svg.png" alt="Github" width={35} height={35} /></a></li>
          </ul>
        </footer>
      </div>
    </div>


  )
}

export default Footer