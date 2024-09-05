import { useEffect, useState } from "react"

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  async function fetchUsers(): Promise<User[]> {
    const response = await fetch('http://localhost:8000/accounts/api');
    const data = await response.json();
    return data;
  }
  
  function UserList() {
      const [users, setUsers] = useState<User[]>([]);
      const [error, setError] = useState<string | null>(null)
      useEffect(() => {
        async function fetchData() {
          try {
            const data = await fetchUsers();
            setUsers(data);
            console.log(data)
          } catch (error) {
            console.log(error.message)
            setError(error.message);
          }
        }
        fetchData();
      }, []);
      if (error) {
        return <div>Error: {error}</div>;
      }
      return (
        <div>
          {users.map((user) => (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      );
    }
  

export function Login(){
    return <UserList></UserList>
}