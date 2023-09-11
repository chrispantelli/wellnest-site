export default function How() {
    return (
        <section className="bg-dark-blue relative">
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="heading-2 text-white text-center z-50">How Wellnest Works</h2>
                <div className="grid lg:grid-cols-3 gap-12 pt-20">
                    <div>
                       <img src="https://store.chronomics.com/cdn/shop/files/howitworks_1_180x.png?v=1653489425" className="mx-auto" />
                        <div>
                            <h6 className="heading-6 text-white pt-8 text-center">Step 01</h6>
                            <h4 className="heading-4 text-white text-center">Pick your test</h4>
                            <p className="mt-4 paragraph-regular-medium text-white text-center">Some examples below of how others have done it. The layout/content will be the same just with our own spin.</p>
                        </div>
                    </div>
                    <div>
                    <img src="https://store.chronomics.com/cdn/shop/files/howitworks_2_180x.png?v=1653490750" className="mx-auto" />
                        <div>
                            <h6 className="heading-6 text-white pt-8 text-center">Step 02</h6>
                            <h4 className="heading-4 text-white text-center">Collect your sample</h4>
                            <p className="mt-4 paragraph-regular-medium text-white text-center">Collect your sample and return it to our accredited lab using the prepaid envelope supplied.</p>
                        </div>
                    </div>
                    <div>
                    <img src="https://store.chronomics.com/cdn/shop/files/howitworks_3_180x.png?v=1653490750" className="mx-auto" />

                        <div>
                        <h6 className="heading-6 text-white pt-8 text-center">Step 03</h6>
                        <h4 className="heading-4 text-white text-center">Review your results</h4>
                        <p className="mt-4 paragraph-regular-medium text-white text-center">Your results are uploaded to your secure online dashboard within 3-days of being received
by the lab.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}