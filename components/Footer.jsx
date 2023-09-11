import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
    return (
        <section className="bg-primary-blue">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-flow-row-dense sm:grid-cols-3 pb-16">
                    <div className="col-span-2">
                        <img className="h-10 w-auto" src="./branding/logo_text_white.svg" />
                        <div className="pt-8">
                            <BsInstagram className="text-white inline-block" size={32}/>
                            <BsTwitter className="text-white inline-block ml-5" size={32}/>
                            <BsLinkedin className="text-white inline-block ml-5" size={32}/>
                        </div>
                    </div>
                    <div>
                        <h6 className="heading-6 text-white">Subscribe</h6>
                        <div className="grid grid-flow-row-dense grid-cols-3 pt-4 gap-x-4">
                            <div className="col-span-2">
                                <input type="text" className="p-4 rounded-2xl w-full paragraph-regular-medium" placeholder="Enter your email"/>
                            </div>
                            <button className="bg-primary-blue border-2 border-white text-white font-semibold rounded-2xl transition ease-in-out  hover:text-secondary-blue hover:bg-white">Subscribe</button>
                        </div>
                        <p className="paragraph-small-bold text-white pt-4">By subscribing you agree to our Privacy Policy</p>
                    </div>
                </div>
                <div className="border border-white"></div>
                <div className="grid grid-flow-row-dense grid-cols-3 pt-9">
                    <div className="col-span-2">
                        <ul className="flex">
                            <li className="mr-6">
                                <a className="paragraph-tiny-normal text-white underline underline-offset-4" href="#">Privacy Policy</a>
                            </li>
                            <li className="mr-6">
                                <a className="paragraph-tiny-normal text-white underline underline-offset-4" href="#">Terms of Service</a>
                            </li>
                            <li className="mr-6">
                                <a className="paragraph-tiny-normal text-white underline underline-offset-4" href="#">Cookies Settings</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="paragraph-small-bold text-white float-right">© 2023 Wellnest. All rights reserved</p>
                    </div>
                </div>
            </div>
        </section> 
    )
}