import { useCallback, useEffect, useState } from "react";
import "./Navbar.css";
import axios from "axios";
import { useParams } from "react-router-dom";

interface User {
  id: number;
  fname: string;
  lname: string;
  username: string;
  avatar: string;
}

interface Response<T> {
  status: string;
  user: T;
}

const Navbar = () => {
  const [users, setUsers] = useState<User>();
  const { id } = useParams();

  const fetchUsers = useCallback(async () => {
    const res = await axios.get<Response<User>>(
      `https://www.melivecode.com/api/users/${id}`
    );
    const userData = res.data.user;
    setUsers(userData);
  }, [id]);
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
