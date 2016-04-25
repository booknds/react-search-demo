import React from 'react';

const Main = ({ children }) => {
    return (
        <div className="main-container">
            <nav className="navbar navbar-default" role="navigation">
                <div className="col-sm-7 col-sm-offset-1">
                    <h1 className="logo-title" style={{fontFamily: 'Segoe UI'}}> Pharmacy
                      <sup>
                        <small>*not a real pharmacy.</small>
                      </sup>
                    </h1>
                </div>
                <div className="col-sm-3 " style={{marginTop: 15}}>
                    {/*gets access to history because Main is being controlled by the router in routes.js*/}
                    <div className="col-sm-12">
                      <form>
                        <div className="form-group col-sm-9">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-group col-sm-3">
                          <button className="btn btn-default" type="submit">
                            Search
                          </button>
                        </div>
                      </form>
                    </div>
                </div>
            </nav>
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default Main;
                  //<img src="https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Walgreens_Logo.svg/1280px-Walgreens_Logo.svg.png" style={{width: 200, marginTop: 15}} /> <sub>*Not a Walgreen's product, duh.</sub>
