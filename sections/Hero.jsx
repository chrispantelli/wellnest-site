import Navbar from "../components/Navbar";

export default function Hero() {
    return (
        <>
            <section className="h-screen bg-soft-blue overflow-hidden relative">
                <Navbar />
                <h1 className="heading-1 text-dark-blue text-center pt-20">Your Health…Reimagined</h1>
                <h5 className="heading-5 text-primary-blue text-center pt-3">Our app, with your personalised fingerprint</h5>
                <img src="./objects/iphone.svg" className="mx-auto mt-10" />
            </section>
        </>
    )
}