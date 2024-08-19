const Signin = () => {
  return (
    <div className="signin">
      <form>
        <div className="first-name">
          <label htmlFor="fname">Frist Name: </label>
          <input type="text" placeholder="first name..." />
        </div>
        <div className="last-name">
          <label htmlFor="lname">Last Name: </label>
          <input type="text" placeholder="last name..." />
        </div>
        <div className="username">
          <label htmlFor="user">Username: </label>
          <input type="text" placeholder="username..." />
        </div>
        <div className="password">
          <label htmlFor="pass">Password: </label>
          <input type="text" placeholder="password..." />
        </div>
        <div className="con-password">
          <label htmlFor="con-pass">Confirm Password: </label>
          <input type="text" placeholder="confirm-password..." />
        </div>
        <div className="email">
          <label htmlFor="email">Email: </label>
          <input type="text" placeholder="email..." />
        </div>
      </form>
    </div>
  );
};

export default Signin;
