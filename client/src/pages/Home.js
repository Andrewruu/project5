import { useSelector } from "react-redux";

function Home (){
    const user = useSelector((state) => state.auth.user);
    
    return(
        <div>

        <p>Welcome, {user.display_name}!</p>
        <p> This application is to store the novels you are currently reading.</p>
        <p> In order to see and add novels navigate to My Novels.</p>
        <p> At the top of the page there will be an add novel option that will then lead you to fill out the form to add novels.</p>
        <p> To remove/edit novels on the My Novels page there will be a view novel button user that and you will navigate to that novels details</p>
        <p> On this page there will be an edit and delete option.</p>
        </div>
    )

}

export default Home;