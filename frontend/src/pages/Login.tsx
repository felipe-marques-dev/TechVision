import { useEffect, useState } from "react"

interface User {
    id: number;
    nome: string;
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
              <h2>{user.nome}</h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      );
    }
  

export function Login(){
    return (
      <div>
      <h1>Login</h1>
      <form
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
          };
          const email = target.email.value; // typechecks!
          const password = target.password.value; // typechecks!
          // etc...
        }}
      >
        <div>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </form>
      <a href="/cadastro">Cadastre-se</a>
      </div>
    )
}