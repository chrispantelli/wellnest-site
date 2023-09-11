export default function About() {
    return (
        <section className="bg-primary-blue relative">
            <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-28 items-center">
                    <div>
                        <h2 className="heading-2 text-white">About Us & What We Do</h2>
                        <p className="paragraph-regular-medium text-white pt-6">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus</p>
                    </div>
                    <div className="bg-white h-96 rounded-2xl">
                            
                    </div>
                </div>
            </div>
            <img className="absolute right-0 -bottom-48 z-40" src="./patterns/sunshine.svg"/>
        </section>
    )
}