import React from 'react'
import { Link } from "react-router-dom";

import { Nav } from 'react-bootstrap';
const andd = "&";



function MulaiSewa() {
    return (
        <section className="mulai-sewa">
            <div className="container">
                <div className="row mulai-sewa-row">
                    <div className="col-12 col-lg-6 col-md-12">
                        <h1>
                            Sewa {andd} Rental Mobil Terbaik di kawasan (Lokasimu)
                        </h1>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        {/* <a href="/cars" className="nav-item-btn">Mulai Sewa Mobil</a> */}
                        <Nav.Link as={Link} to="/cars" className="nav-item-btn">Mulai Sewa Mobil</Nav.Link>
                    </div>
                    <div className="col-12 col-lg-6 col-md-12">
                        <img src="asset/gambar/img_car.png" alt="car mulai-sewa" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MulaiSewa