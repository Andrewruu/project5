import { useSelector } from "react-redux";

function Home (){
    const user = useSelector((state) => state.auth.user);
    
    return(
        <div className="container-fluid">
            <div className="center-container">
                <h2>Welcome, {user.display_name}!</h2>
                <p> This application is to store the novels you are currently reading.</p>
                <p> In order to view or add novels navigate to My Novels.</p>
                <p> At the top of the page there will be an add novel option that will then lead you to fill out the form to add novels.</p>
                <p> To remove/edit novels on the My Novels page if you have novels just click on one to view more details</p>
                <p> On view more details page there will be an edit and delete option.</p>
            </div>
        </div>
    )

}

export default Home;