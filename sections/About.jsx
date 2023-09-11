export default function About() {
    return (
        <section className="bg-primary-blue relative" id="about">
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-28 items-center">
                    <div>
                        <h2 className="heading-2 text-white">About Us & What We Do</h2>
                        <p className="paragraph-regular-medium text-white pt-6">At Wellnest, our sincere mission is to guide and support you on your journey towards
becoming the best version of yourself. With our extensive expertise and genuine passion, we
have had the privilege of accompanying individuals on transformative paths for the past year.
Today, we invite you to join our compassionate community and embark on a personalised
journey towards optimal well-being. Together, let us unlock your full potential, nurturing your
mind, body, and soul every step of the way.</p>
                    </div>
                    <img src="lab.jpeg" className="rounded-2xl"/>
                </div>
            </div>
            <img className="absolute right-0 -bottom-48 z-40" src="./patterns/sunshine.svg"/>
        </section>
    )
}