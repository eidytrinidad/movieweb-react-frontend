import React from "react";

export const Login = () => {
  return (
    <section className="login">
      <article className="container">
        <h1>MOVIE WEB</h1>

        <form className="form" action="" method="POST">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" className="form-control" 
                />
          </div>

          <div className="form-group">
            <div className="formGroup">
              <label htmlFor="password">Password</label>
              <input 
                    type="password" 
                    name="password" 
                    className="form-control" />
            </div>
          </div>

          <button className="btn">Login</button>
        </form>
      </article>
    </section>
  );
};
