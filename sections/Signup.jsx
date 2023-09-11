export default function Signup() {
    return (
        <section className="bg-soft-mint relative">
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="gap-28 items-center w-1/2 mx-auto">
                    <div className="bg-white rounded-2xl p-12 shadow-inner">
                        <h4 className="heading-4 text-dark-blue text-center">Register your interest</h4>
                        <p className="paragraph-large-semibold text-dark-blue text-center">and receive up to 25% off once we launch.</p>
                        <form method="post" className="pt-10">
                            <input type="text" className="rounded-2xl border-dark-blue border-2 p-3 w-full paragraph-regular-semibold text-slate-700" placeholder="Email" />
                            <button type="submit" className="rounded-2xl bg-primary-blue text-white p-3 w-full mt-5">
                                <h6 className="heading-6 text-white">Register</h6>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}