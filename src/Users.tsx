import './App.css';
// @ts-ignore
import adminIcon from "./assets/admin.svg";
// @ts-ignore
import userIcon from "./assets/standard-user.svg";
import {useEffect, useState} from "react";

interface TeamMember {
  id: number;
  status: Status;
  user: UserShortData;
  role: Role;
}

type Role = "Administrator" | "Standard";

type Status = "request" | "pending" | "approved" | "declined" | "invited";

interface UserShortData {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

interface Invite {
  id: number;
  phone: string;
  role: Role;
}

const UsersInvites = () => {
  const usersData: TeamMember[] = [
    {
      id: 1,
      status: "invited",
      user: {
        id: 1,
        name: "Adam",
        lastName: "Collins",
        phone: "+374 123456",
        email: "userexample@gmail.com",
      },
      role: "Administrator",
    },
    {
      id: 2,
      status: "request",
      user: {
        id: 1,
        name: "John",
        lastName: "Doe",
        phone: "+374 123456",
        email: "userexample@gmail.com",
      },
      role: "Standard",
    },
    {
      id: 3,
      status: "pending",
      user: {
        id: 1,
        name: "Arabelle",
        lastName: "Glitch",
        phone: "+374 123456",
        email: "userexample@gmail.com",
      },
      role: "Standard",
    },
    {
      id: 4,
      status: "approved",
      user: {
        id: 1,
        name: "Susan",
        lastName: "Dominguez",
        phone: "+374 123456",
        email: "userexample@gmail.com",
      },
      role: "Administrator",
    },
    {
      id: 5,
      status: "invited",
      user: {
        id: 1,
        name: "Robert",
        lastName: "Santos",
        phone: "+374 123789",
        email: "userexample@gmail.com",
      },
      role: "Standard",
    },
    {
      id: 6,
      status: "pending",
      user: {
        id: 1,
        name: "John",
        lastName: "Smith",
        phone: "+374 54454545",
        email: "userexample@gmail.com",
      },
      role: "Standard",
    },
    {
      id: 7,
      status: "invited",
      user: {
        id: 1,
        name: "Adam",
        lastName: "Smith",
        phone: "+374 123741",
        email: "userexample@gmail.com",
      },
      role: "Administrator",
    },
    {
      id: 8,
      status: "invited",
      user: {
        id: 1,
        name: "Arabelle",
        lastName: "Glitch",
        phone: "+374 123741",
        email: "userexample@gmail.com",
      },
      role: "Standard",
    },
    {
      id: 9,
      status: "pending",
      user: {
        id: 1,
        name: "Samuel",
        lastName: "Rodriguez",
        phone: "+374 12378981",
        email: "userexample@gmail.com",
      },
      role: "Standard",
    },
  ];

  const invitedUsers: Invite[] = [
    {
      id: 1,
      phone: "+374 123456",
      role: "Administrator",
    },
    {
      id: 2,
      phone: "+374 123789",
      role: "Standard",
    },
    {
      id: 3,
      phone: "+374 123741",
      role: "Standard",
    },
  ]

  const [adminUsers, setAdminUsers] = useState([]);
  const [standardUsers, setStandardUsers] = useState([]);

  useEffect(() => {
    if (usersData.length) {
      const administrators = usersData.filter((user) => user.role === "Administrator");
      const standard = usersData.filter((user) => user.role === "Standard");
      setAdminUsers(administrators);
      setStandardUsers(standard);
    }
  }, [])

  // Task 1
  // Write a get function that gets an object and the path to a nested property of an object and returns the value of that property
  const getNestedProperty = (obj, path, defaultValue = null) => {
    const value = path.split('.').reduce((obj, prop) => obj && obj[prop], obj);

    if (value) {
      return value
    } else if (defaultValue) {
      return defaultValue;
    } else {
      return undefined;
    }
  }

  const myObject = {
    a: {
      b: {
        c: 'd'
      },
      e: 'f'
    }
  };

  getNestedProperty(myObject, 'a.b');

  return (
    <div className="container">
      <div className="box-content">
        <div className="title">
          <img src={adminIcon} alt="admin user icon" />
          <span>Administrators</span>
        </div>
        <div className="content">
          { adminUsers.length ? adminUsers.map((user) => (
              <div className="item" key={user.id}>
                { user.status === "invited" &&
                invitedUsers.find((invitedUser) =>
                    invitedUser.phone === user.user.phone && invitedUser.role === user.role)
                ? (
                    <>
                      <span className="phone-number">{user.user.phone}</span>
                      <div className="status">{user.status}</div>
                    </>
                ) : (
                    <span>{user.user.name} {user.user.lastName}</span>
                ) }
              </div>
          )) : null }
        </div>
      </div>
      <div className="box-content">
        <div className="title">
          <img src={userIcon} alt="standard user icon" />
          <span>Standard Users</span>
        </div>
        <div className="content">
          { standardUsers.length ? standardUsers.map((user) => (
              <div className="item" key={user.id}>
                { user.status === "invited" &&
                invitedUsers.find((invitedUser) =>
                    invitedUser.phone === user.user.phone && invitedUser.role === user.role)
                ? (
                        <>
                          <span className="phone-number">{user.user.phone}</span>
                          <div className="status">{user.status}</div>
                        </>
                ) : (
                    <span>{user.user.name} {user.user.lastName}</span>
                ) }
              </div>
          )) : null }
        </div>
      </div>
    </div>
  );
}

export default UsersInvites;
