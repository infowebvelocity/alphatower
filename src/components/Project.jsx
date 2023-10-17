import React, { useState, useEffect } from 'react'
import Success from './Success'
import projectimg from "../images/pimg.png"
import Projectcard from './Projectcard';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Project = () => {

    const [data, setData] = useState([]);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const url =
        `https://oh63480nj3.execute-api.ap-south-1.amazonaws.com/Test/`;

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
                console.log(response.data)

            })
            .catch((error) => {
                console.log(error);

            });
    }, []);

    return (
        <section className="pricing">
            <Success classs="success projectbg" bpara={'bpara'} bhead={'bhead'} image={projectimg} title="Our Projects" para1="Our pricing strategy is designed to align with your success. We believe in transparency and offer affordable rates to capitalize on market opportunities and boost your trading strategies" />

            <div className="projectcon">

                {
                    data.slice(0, 3).map((data, index) => {
                        return (

                            <Link key={index} onClick={scrollToTop} to={`/project/${data.id}`}><Projectcard img={data.thumbnail} title={data.name} para={data.summary} /></Link>

                        )
                    })
                }

            </div>
        </section>
    )
}

export default Project