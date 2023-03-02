
import { Link } from "react-router-dom"


const Welcome = () => {
    return(
        <main>
            <h1>Welcome, User</h1>
            <p>Find something to buy <Link to="/">here</Link></p>
            <p>or <Link to="/">update your profile</Link></p>
        </main>
    )
}



export default Welcome