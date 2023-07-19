const TopBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blockchain Explorer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Donate
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
