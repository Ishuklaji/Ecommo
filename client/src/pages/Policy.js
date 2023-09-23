import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
    return (
        <Layout title={"Privacy Policy"}>
            <div className="row contactus">
                <div className="col-md-6">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqWAHFA1cbxBbovMo_jvhF8LE41J9oVPDj4A&usqp=CAU"
                        alt="contactus"
                        style={{ width: "50%" }}
                    />
                </div>
                <div className="col-md-4">
                    <h2>Privacy Policy</h2>
                    <p>
                        At Ecommo, we are committed to protecting your privacy and ensuring
                        the security of your personal information. This Privacy Policy
                        outlines the types of personal information we collect and how it is
                        used.
                    </p>
                    <p>
                        We collect information to provide you with the best possible
                        shopping experience and to communicate with you about our products,
                        services, and promotions.
                    </p>
                    <p>
                        Rest assured, we do not share your personal information with third
                        parties for their marketing purposes without your consent.
                    </p>
                    <p>
                        For more details on how we handle your personal information and
                        protect your privacy, please read our full Privacy Policy.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Policy;
