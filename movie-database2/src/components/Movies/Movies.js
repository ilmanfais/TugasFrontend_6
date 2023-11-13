import React, {useState} from "react";
import DataMovie from "../../utils/constans/DataMovie";
import styles from "./Movies.module.css";
import Movie from "../Movie/Movie"

function Movies() {

    // state
    const [item, setItem] = useState(DataMovie);

    const handleClick = () => {
        const movie = {
            id: 4,
            title: "Attack on Titan",
            date: "19 oktober 2018",
            Image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg"
        }

        setItem([...item, movie]);
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__title}>Lates Movie</h2>
                <div className={styles.movie__container}>
                    {
                        item.map(function(data) {
                            return (
                                
                                <Movie key={data.id} title= {data.title} date= {data.date} Image={data.Image}/>
                                
                            )
                        })
                    }
                </div>
                <button onClick={handleClick}>Tambahkan Movies</button>
            </section>
        </div>
    );
}

export default Movies;