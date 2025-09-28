import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Team(){
    return (
        <>
            <Header/>
            <section id="team" class="py-5 bg-light">
                <div class="container">
                <h2 class="text-center mb-4">Our Team</h2>
                <div class="row  g-4 row-justify-content-center">
                    <div class="col">
                    <div class="card h-100 text-center">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Team Member"/>
                        <div class="card-body">
                        <h5 class="card-title">Raisya</h5>
                        <p class="card-text">Lead Developer</p>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card h-100 text-center">
                        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Team Member"/>
                        <div class="card-body">
                        <h5 class="card-title">Mentor</h5>
                        <p class="card-text">Project Manager</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer/>           
        </>
    )
}