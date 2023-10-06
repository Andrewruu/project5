import { useSelector } from "react-redux";

function Home (){
    const user = useSelector((state) => state.auth.user);
    
    return(
        <div>

        <p>Welcome, {user.display_name}!</p>

        </div>
    )

}

export default Home;