import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout title={"Contact us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3BA68AmgikIGJIwRYXpZXptcIhoJDkyGQuA&usqp=CAU"
                        alt="contactus"
                        style={{ width: "50%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        any query and info about product feel free to call anytime we 24X7
                        available
                    </p>
                    <p className="mt-3">
                        <BiMailSend /> : www.help@ecommo.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : 012-3456789
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 1800-1234-0000 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;