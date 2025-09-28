import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

export default function Contact(){

    return(

        <>
            <Header/>
            <section id="contact" class="py-5 bg-light">
                <div class="container">
                <h2 class="text-center mb-4">Contact</h2>
                <div class="row justify-content-center">
                    <div class="col-md-6">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><strong>Email:</strong> araisyaanfl@gmail.com</li>
                        <li class="list-group-item"><strong>Telepon:</strong> +62 819-5273-0465</li>
                        <li class="list-group-item"><strong>Alamat:</strong> Jl. Ayub No. 6A, Jakarta Timur</li>
                    </ul>
                    </div>
                </div>
                </div>
            </section>
            <Footer/>        
        </>
    )
}