import React from 'react';
import man01 from '../../Images/About/man01.jpg'
import man02 from '../../Images/About/man02.jpg'
import './Blog.css'
const Blogs = () => {
    return (
        <>
            <div className="img-about">
                <h2 className="h2">About Us</h2>
            </div>
            <div className="title">
                <h1 ><span>Our</span>  Blog </h1>
            </div>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <h1>sundarban tour</h1>

                        <p>To avoid the hustle and bustle of the city and to unwind yourself you need to select the right destination and place.

                            Sundarbans is a pollution free and a wonderful peaceful destination for nature lovers. We are in  the midst of Mangrove forests in Jamespur Island on the bank of Pitchkhali River.

                            For a trouble free and peace of mind you need to select the right Sundarban Tour Package from the island who can cater to your needs , right from Boat safari with professional forest guides and stay at a comfortable resort with food .

                            Once you reach Godhkhali Jetty you are taken care by our team till you return with memorable experience. No hidden costs and no need of carrying extra money while you are there in Sundarban.

                            The enchanting rivers and creeks you sail while the jungle safari by boat through Mangrove forests is adventurous and exciting. You see the flora and fauna of this world Heritage Site and you may spot The Royal Bengal Tiger if you are lucky.

                            Come and enjoy the holidays with us .</p>

                    </div>
                    <div className="about-col">
                        <img src={man01} alt="" />
                    </div>
                </div>
            </section>
            <section className="about-us">
                <div className="row">
                    <div className="about-col">
                        <img src={man02} alt="" />
                    </div>
                    <div className="about-col">
                        <h1>Sahjek Tour</h1>

                        <p>Sajek valley is 2000 feet above sea level. Sajek valley is known as the Queen of Hills & Roof of Rangamati. The name of Sajek Valley came from Sajek River that originates from Karnafuli river. Sajek river is working as a border between Bangladesh and India. Sajek valley resorts are made on the side of the hill to provide the unique experience of tribal lifestyle.</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;