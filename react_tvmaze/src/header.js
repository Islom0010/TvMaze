const Header = () => {
    return (
            <header className="flex">
        <div className="left flex">
            <img src="tvmaze-logo.png" alt="" />
        </div>

        <div className="midle flex">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username"
                    aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button id="btn" className="btn btn-outline-secondary" type="button">
                    <img src="srch.png" alt="" className="mx-4" />
                </button>
            </div>
        </div>

        <div className="right flex">
            
            <a href="">Login</a>
            <a href="">Register</a>
        </div>
    </header>
    );
  }

  export default Header