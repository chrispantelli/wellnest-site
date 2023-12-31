export default function How() {
    return (
        <section className="bg-dark-blue relative">
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="heading-2 text-white text-center z-50">How Wellnest Works</h2>
                <div className="grid lg:grid-cols-3 gap-12 pt-20">
                    <div>
                       <img src="howitworks_1_180x.png" className="mx-auto" />
                        <div>
                            <h6 className="heading-6 text-white pt-8 text-center">Step 01</h6>
                            <h4 className="heading-4 text-white text-center">Pick your test</h4>
                            <p className="mt-4 paragraph-regular-medium text-white text-center">Order your test online or through our app. You'll receive the collection kit through your letterbox within 48 hours.</p>
                        </div>
                    </div>
                    <div>
                    <img src="howitworks_2_180x.avif" className="mx-auto" />
                        <div>
                            <h6 className="heading-6 text-white pt-8 text-center">Step 02</h6>
                            <h4 className="heading-4 text-white text-center">Collect your sample</h4>
                            <p className="mt-4 paragraph-regular-medium text-white text-center">Collect your sample and return it to our accredited lab using the prepaid envelope supplied.</p>
                        </div>
                    </div>
                    <div>
                    <img src="howitworks_3_180x.png" className="mx-auto" />

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