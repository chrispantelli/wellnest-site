export default function Kits() {
    return (
        <section className="bg-soft-blue relative">
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div>
                    <h5 className="heading 5 text-dark-blue">Wellnest kits</h5>
                    <h2 className="heading-2 text-dark-blue">Our Kits</h2>
            </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-20">
                    <div>
                        <img src="products/BoxMock_For Him.jpg" className="rounded-2xl" />
                        <h6 className="heading-6 text-dark-blue pt-4">Wellnest for Him</h6>
                        <p className="paragraph-large-normal text-primary-blue">Popular</p>
                    </div>
                    <div>
                        <img src="products/BoxMock_For Her.jpg" className="rounded-2xl" />
                        <h6 className="heading-6 text-dark-blue pt-4">Wellnest for Her</h6>
                        <p className="paragraph-large-normal text-primary-blue">Popular</p>
                    </div>
                    <div>
                        <img src="products/BoxMock_Intolerance & Allergies.jpg" className="rounded-2xl" />
                        <h6 className="heading-6 text-dark-blue pt-4">Premium Intolerance Test</h6>
                        <p className="paragraph-large-normal text-primary-blue">Health</p>
                    </div>
                    <div>
                        <img src="products/BoxMock_Essential Vitamins Test.jpg" className="rounded-2xl" />
                        <h6 className="heading-6 text-dark-blue pt-4">Essential Health Test</h6>
                        <p className="paragraph-large-normal text-primary-blue">Full Body Health</p>
                    </div>
                    <div>
                        <img src="products/BoxMock_Male Hormone Test.jpg" className="rounded-2xl" />
                        <h6 className="heading-6 text-dark-blue pt-4">Male Hormone Test</h6>
                        <p className="paragraph-large-normal text-primary-blue">Gut Health</p>
                    </div>
                    <div>
                        <img src="products/BoxMock_Female Hormone Test.jpg" className="rounded-2xl" />
                        <h6 className="heading-6 text-dark-blue pt-4">Female Hormone Test</h6>
                        <p className="paragraph-large-normal text-primary-blue">Womens</p>
                    </div>
                </div>
            </div>
        </section>
    )
}