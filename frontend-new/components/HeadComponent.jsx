import React from 'react';
import Head from "next/head";

const HeadComponent = ({title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8"/>
            <meta name="description" content=""/>
            <meta name="keywords" content=""/>
            <meta name="author" content=""/>
            <link rel="profile" href="#"/>

            <link rel="stylesheet"
                  href='http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600'/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="format-detection" content="telephone-no"/>
        </Head>
    );
};

export default HeadComponent;