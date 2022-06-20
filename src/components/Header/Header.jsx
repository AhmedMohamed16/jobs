import React from 'react'
import { Link } from 'react-router-dom'
;<style></style>
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 >
          {' '}
          <Link to="/" style={{ textDecoration: 'none' }}>
            Jobs For Developers{' '}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
