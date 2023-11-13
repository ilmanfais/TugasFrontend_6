import styles from "./Hero.module.css";

function Hero() {
    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.hero__left}>
                    <h2 className={styles.hero__title}>Moskov</h2>
                    <h3 className={styles.hero__genre}>
                    Genre: Marksman
                    </h3>
                    <p className={styles.hero__description}>
                    Moskov adalah salah satu hero dalam permainan Mobile Legends. Dia adalah seorang Marksman yang memiliki kemampuan yang sangat kuat dalam hal serangan jarak jauh dan mobilitas yang tinggi.
                    </p>
                    <button className={styles.hero__button}><strong>See More</strong></button>
                </div>
                <div className="hero__right">
                    <img
                    className={styles.hero__image}
                    src="https://i.pinimg.com/originals/70/33/02/70330220ae6e56c39b5647fc7bd6247d.jpg" 
                    alt="placeholder"
                    />
                </div>
            </section>
        </div>
    )
}

export default Hero;