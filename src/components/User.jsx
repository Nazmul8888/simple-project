import { useLoaderData } from "react-router-dom";

const User = () => {
    const user = useLoaderData()
    return (
        <div>
            <h1>{user.length}</h1>
            <div>
                {
                    user.map(user=> <p key={user.id}>{user.name}: {user.email}</p>) 
                }
            </div>
            
        </div>
    );
};

export default User;