import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Bannerimg from '../../assets/images/banner_undershape.png'
import Bannerimg01 from '../../assets/images/chiken_icon.png'
import Textimg from '../../assets/images/video_text.png'
import Playimg from '../../assets/images/play.png'
import SmillyImg from '../../assets/images/smilly.png'
import ChefImg from '../../assets/images/chef_icon.png'
import DishImg from '../../assets/images/dish_fav.png'
import RateImg from '../../assets/images/rate.png'

function VideoTwo() {
    const [show, setshow] = useState(false)

    const initialCounts = {
        customers: 0,
        chefs: 0,
        dishes: 0,
    };
    const finalCounts = {
        customers: 8900,
        chefs: 25,
        dishes: 125,
    };

    const [counts, setCounts] = useState(initialCounts);

    useEffect(() => {
        const updateCounter = () => {
            const interval = 1;
            const timers = Object.keys(finalCounts).map((key) => {
                const startCount = counts[key];
                const endCount = finalCounts[key];
                const step = Math.ceil((endCount - startCount) / (1000 / interval));

                return setInterval(() => {
                    setCounts((prevCounts) => ({
                        ...prevCounts,
                        [key]: Math.min(prevCounts[key] + step, endCount),
                    }));
                }, interval);
            });
            return () => {
                timers.forEach((timer) => clearInterval(timer));
            };
        };
        updateCounter();
    }, []);


    return (
        <>
            <div className="home_video_section bg_white_textcher row_inner_am">
                <div className="side_shape">
                    <img className="right_shape" src={Bannerimg} alt="img" />
                    <img className="left_shape" src={Bannerimg01} alt="img" />
                </div>
                <div className="container-fluid">
                    <div className="video_wraper" data-aos="fade-in" data-aos-duration={1500}>
                        <div className="play_vtn d-flex justify-content-center align-items-center">
                            <div className="round_anim">
                                <img src={Textimg} alt="img" />
                            </div>
                            <div className="action_btn" onClick={() => setshow(true)}>
                                <Link to="#" className="popup-youtube play-button"
                                    data-url="https://www.youtube.com/embed/NC9KlaxtfLg?autoplay=1&mute=1" data-toggle="modal" data-target="#myModal" title="XJj2PbenIsU" >
                                    <img src={Playimg} alt="img" />
                                </Link>
                            </div>
                        </div>
                        <ul className="bottom_text" data-aos="fade-down" data-aos-duration={1500}>
                            <li>
                                <span className="icon">
                                    <i className="icofont-location-pin" />
                                </span>
                                <div className="text">
                                    <h3>Locate Us</h3>
                                    <p>Delicious City, London 9578, UK</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="icofont-wall-clock" />
                                </span>
                                <div className="text">
                                    <h3>Open Hours</h3>
                                    <p>Mon To Fri 9:00 AM - 9:00 PM</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">
                                    <i className="icofont-calendar" />
                                </span>
                                <div className="text">
                                    <h3>Reservation</h3>
                                    <p>
                                        <Link to="mail:reservation@gmail.com">reservation@gmail.com</Link>
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <ul className="count_block" id="counter">
                        <li data-aos="fade-up" data-aos-duration={1000}>
                            <div className="icon">
                                <img src={SmillyImg} alt="img" />
                            </div>
                            <p className="count_text">
                                <span className="counter-value" data-count={8900}>
                                    {counts.customers}
                                </span>
                                <span>+</span>
                            </p>
                            <p>happy customers</p>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={1500}>
                            <div className="icon">
                                <img src={ChefImg} alt="img" />
                            </div>
                            <p className="count_text">
                                <span className="counter-value" data-count={25}>
                                    {counts.chefs}
                                </span>
                                <span>+</span>
                            </p>
                            <p>Passonate Chefs</p>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={2000}>
                            <div className="icon">
                                <img src={DishImg} alt="img" />
                            </div>
                            <p className="count_text">
                                <span className="counter-value" data-count={125}>
                                    {counts.dishes}
                                </span>
                                <span>+</span>
                            </p>
                            <p>Favourite Dishes</p>
                        </li>
                        <li data-aos="fade-up" data-aos-duration={2500}>
                            <div className="icon">
                                <img src={RateImg} alt="img" />
                            </div>
                            <p className="count_text">
                                <span>4.9</span>
                            </p>
                            <p>Customer Rating</p>
                        </li>
                    </ul>

                </div>
            </div>

            {show &&
                <div className="modal fade youtube-video show" id="myModal" tabIndex={-1} role="dialog" style={{ paddingRight: 17, display: "block" }} aria-modal="true" >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" onClick={() => setshow(false)}>
                            <button id="close-video" type="button" className="button btn btn-default text-right" data-dismiss="modal" onClick={() => setshow(false)}>
                                <i className="icofont-close-line-circled" />
                            </button>
                            <div className="modal-body">
                                <div id="video-container" className="video-container">
                                    <iframe id="youtubevideo"
                                        width={640}
                                        height={360}
                                        allowFullScreen=""
                                        src="https://www.youtube.com/embed/NC9KlaxtfLg?autoplay=1&mute=1" />
                                </div>
                            </div>
                            <div className="modal-footer"></div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default VideoTwo