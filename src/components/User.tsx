import { useState } from "react";
import { Button } from "react-bootstrap";

interface User {
    uid: string,
    name: string
}

const tempUser: User = {
    uid: 'ABC123',
    name: 'Xavi',
}

const User = () => {
    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            name: 'Xavi',
            uid: 'ABC123'
        })
    }

    return (
        <div>
            <h3>User:useState</h3>
            <div className="d-flex align-items-center">
                <Button className="mx-2" onClick={login}>
                    Login
                </Button>
                {user ? <pre>{JSON.stringify(user)}</pre> : <pre>No hay User</pre>}
            </div>
        </div>
    )
}

export default User
