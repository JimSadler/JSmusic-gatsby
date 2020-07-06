import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components'
const SuccessContainer = styled.div`
    height :700px;
    text-align: center;
    h1 {
        padding-top:10%;
    }
`
const ContactSuccess = () => {
    return (
        <Layout>
            <SuccessContainer className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>
                            Thanks for getting in touch!
                        </h1>
                    </div>
                </div>
            </SuccessContainer>

        </Layout>
    )
};

export default ContactSuccess;