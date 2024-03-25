import React from 'react'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <div>
      <div className="b-exaple-divider" />
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="https://vinschool.edu.vn/wp-content/uploads/2022/03/22/logovins.png" alt="X" width={60} height={35}></img>
            </a>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink className="nav-link active" aria-current="page" to="/">Trang Chủ</NavLink></li>
              <li><NavLink className="nav-link active" aria-current="page" to="/products">Sản Phẩm</NavLink></li>
              <li><NavLink className="nav-link active" aria-current="page" to="/about">Về Chúng Tôi</NavLink></li>
            </ul>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input type="search" className="form-control form-control-dark " placeholder="Tìm kiếm..." aria-label="Search" />
            </form>
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">Đăng Nhập</button>
              <button type="button" className="btn btn-warning">Đăng Ký</button>
            </div>
          </div>
        </div>
      </header>
    </div>


  )
}

export default Header