import React from "react";

import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import Features from "./Features"
import Stats from "./Stats"
import Properties from "./Properties"
import Testimonials from "./Testimonials"


const Home = () => {
    return (
        <>
        <Header />
            <main>
                <Hero />
                <Features />
                <Stats />
                <Properties />
                <Testimonials />
            </main>
        </>
    )
}

export default Home;