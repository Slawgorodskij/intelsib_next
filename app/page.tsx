import styles from './styles/home.module.css'
import {Card} from "@/components/UI/Card";
import {ContentCards} from "@/constants";
import {AboutCEO} from "@/components/AboutCEO";
import {FeedbackSwiper} from "@/components/FeedbackSwiper";
import {BlockCase} from "@/components/BlockCase";
import {About} from "@/components/About";
import {HomeNewIntro} from "@/components/HomeNewIntro";
import {ApplicationBlock} from "../components/ApplicationBlock";

export default function Home() {
    return (
        <>
            <section className='bg-white'>
                <div className='container padding-top'>
                    <HomeNewIntro/>
                </div>
            </section>
            <article className='bg-grey'>
                <div className='container'>
                    <div className={styles.cards}>
                        {ContentCards.map((item, index) =>
                            <Card
                                key={index}
                                content={item}
                                titleButton={'Расчет стоимости'}
                            />
                        )}
                    </div>
                </div>
            </article>
            <section className="bg-grey">
                <div className="container padding">
                    <BlockCase/>
                </div>
            </section>
            <section className="bg-white">
                <div className="container padding">
                    <FeedbackSwiper/>
                </div>
            </section>
            <section className="bg-grey">
                <div className="container padding">
                    <About/>
                </div>
            </section>
            <section className="bg-white">
                <div className="container padding">
                    <AboutCEO/>
                </div>
            </section>

            <section className='bg-white'>
                <ApplicationBlock/>
            </section>
        </>
    )
}
