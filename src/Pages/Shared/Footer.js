import React from 'react';

const Footer = (props) => {
    return (
        <div >
            <footer className="footer p-10 text-white bg-secondary" >
                <div>
                    <span className="footer-title">Shop</span>
                    <a className="link link-hover font-bold">Instruments</a>
                    <a className="link link-hover font-bold">Instrument Bag </a>
                    <a className="link link-hover font-bold"> Blog </a>
                    <a className="link link-hover font-bold">Home</a>
                    <a className="link link-hover font-bold">Impact</a>
                </div>
                <div>
                    <span className="footer-title">Sell </span>
                    <a className="link link-hover font-bold">Sell on MusEnts </a>
                    <a className="link link-hover font-bold">Teams  </a>
                    <a className="link link-hover font-bold">Affliates</a>
                </div>
                <div>
                    <span className="footer-title">About </span>
                    <a className="link link-hover font-bold">MusEnts, Inc. </a>
                    <a className="link link-hover font-bold"> Policies</a>
                    <a className="link link-hover font-bold">Investors</a>
                    <a className="link link-hover font-bold">Careers</a>
                   
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover font-bold">Dhaka, Panthopath 207, Bangladesh</a>
                </div>

            </footer>
            <footer className="footer footer-center p-10  text-base-content rounded bg-primary">
                <div>
                    <p>Copyright © 2022 - All rights reserved </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;