import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';


const Singlepage = () => {

    const [data, setData] = useState([]);

    const { id } = useParams()

    console.log(id)

    const url =
        `https://oh63480nj3.execute-api.ap-south-1.amazonaws.com/Test/`;

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data[id - 1]);
                // console.log(response.data[0])

            })
            .catch((error) => {
                console.log(error);

            });
    }, []);

    return (
        <div className="singlepage">

            <div className="head">
                {/* <img className='thumb' src={data.thumbnail} alt="thumbnail" /> */}
                <h2>{data.name}</h2>
                <p>{data.summary}</p>
                <p>TechStack - <span>{data.techstack}</span></p>
                <a target='_blank' href={data.link}>Link</a>
            </div>

            <div className="body">
                <p>{data.description1}</p>
                <p>{data.description2}</p>
                <img className='diag' src={data.diagram} alt="diagram" />

                <p>{data.description3}</p>

                <p>{data.description4}</p>
                <p>{data.description5}</p>
                <p>{data.description6}</p>


            </div>


            <div>

            </div>
        </div>
    )


}

export default Singlepage