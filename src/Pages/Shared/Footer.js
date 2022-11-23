import React from 'react';

const Footer = (props) => {
    return (
        <div >
            <footer className="footer p-10 text-white bg-secondary" >
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover font-bold">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">Dhaka, Panthopath 207, Bangladesh</a>
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