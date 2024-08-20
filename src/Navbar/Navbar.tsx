import { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import axios from "axios";

export interface User {
  id: number;
  fname: string;
  lname: string;
  username?: string;
  avatar: string;
}

interface Response<T> {
  status: string;
  user: T;
}

const Navbar = () => {
  const [users, setUsers] = useState<User>();

  const fetchUsers = useCallback(async () => {
    const res = await axios.get<Response<User>>(
      "https://www.melivecode.com/api/users/1"
    );
    const userData = res.data.user;
    setUsers(userData);
  }, []);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="nav">
      <i className="fa-brands fa-steam"></i>
      <div className="nav-right">
        <i className="fa-solid fa-cart-shopping"></i>
        <img src={users?.avatar} alt="logo" className="logo" />
      </div>
    </div>
  );
};

export default Navbar;
