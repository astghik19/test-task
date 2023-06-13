import './App.css';

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
  const usersData: TeamMember = [{
    id: 0,
    status: "request",
    user: {
      id: 0,
      name: "User name 1",
      lastName: "User lastname 1",
      phone: "+374 123456",
      email: "userexample@gmail.com",
    },
    role: "Administrator",
  }]

  return (
    <div>
      <span>Users Invites</span>
    </div>
  );
}

export default UsersInvites;
