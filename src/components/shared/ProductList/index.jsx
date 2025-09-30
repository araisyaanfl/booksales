import books from "../../../Utils/books";
import { useState } from "react";
import styles from "../../../styles/ProductList.module.css"

export default function ProductList() {
    const [bookList, setBookList] = useState([...books]);
    
    const handleClick = () => {
        const newProduk ={
            id : bookList.length +1,
            title: "Hyouka",
            author: "Honobu Yonezawa",
            year: 2001,
            description:
            "Novel misteri sekolah yang mengikuti Oreki Houtarou dalam memecahkan rahasia kecil bersama Klub Sastra Klasik.",
            image: "",
        };

        setBookList((prevList)=> [...prevList, newProduk]);
        alert("Produk berhasil ditambahkan!");
    }

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 id="book" className="fw-light">Best Seller</h1>
            <p className="lead text-body-secondary">
              Petualangan Sherlock Holmes - Menghadirkan kecerdasan luar biasa
              Sherlock Holmes bersama sahabatnya, Dr. Watson, dalam memecahkan
              misteri-misteri rumit di London. Pembaca akan diajak menyusuri jejak
              petunjuk kecil yang ternyata membuka rahasia besar di balik setiap kasus.
            </p>
            <p>
              <a href="#" className="btn btn-primary my-2 m-2">Views</a>
              <a href="#" className="btn btn-secondary my-2">Other Books</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            {bookList.map((book) => (
              <div key={book.id} className="col">
                <div className="card shadow-sm">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="bd-placeholder-img card-img-top"
                    height="225"
                  />

                  <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Buy
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Detail
                        </button>
                      </div>
                      <small className="text-body-secondary">{book.year}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button onClick={handleClick} className={styles.addButton}>Tambah Produk Baru</button>
        </div>
      </div>
    </>
  );
}