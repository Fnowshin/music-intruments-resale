import React from 'react';

const Blog = (props) => {
    return (
        <div className='mx-12 my-8'>
            <div className="card image-full my-6">
                <figure><img src="https://techkalture.com/wp-content/uploads/2020/11/net-developer.jpg" alt="Shoes" /></figure>
                <div className="card-body text-xl font-semibold">
                    <h1 className='mt-12 font-bold text-2xl'> What are the different ways to manage a state in a React application? </h1>
                    <p>Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant components.svg viewer. The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class. There are several other ways to manage states in React, including the use of: <br />
                        Hooks <br />
                        React Context API</p>

                </div>
            </div>
            <div className="card image-full">
                <figure><img src="https://techkalture.com/wp-content/uploads/2020/11/net-developer.jpg" alt="Shoes" /></figure>
                <div className="card-body text-xl font-semibold">
                <h1 className='font-bold text-2xl mt-8'> How does prototypical inheritance work?</h1>

                    <p>Prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.prototype.Array objects inherit from Array.prototype.Player objects inherit from Player.prototype.The Object.prototype is on top of the prototype inheritance chain. Date objects, Array objects, and Player objects all inherit from Object.prototype.</p>

                </div>
            </div>
            <div className="card image-full my-6">
                <figure><img src="https://techkalture.com/wp-content/uploads/2020/11/net-developer.jpg" alt="Shoes" /></figure>
                <div className="card-body text-xl font-semibold">
                    <h1 className='mt-12 font-bold text-2xl'> What is a unit test? Why should we write unit tests?</h1>
                    <p>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>

                </div>
            </div>
            <div className="card image-full my-6">
                <figure><img src="https://techkalture.com/wp-content/uploads/2020/11/net-developer.jpg" alt="Shoes" /></figure>
                <div className="card-body text-xl font-semibold">
                    <h1 className='mt-12 font-bold text-2xl'> What are the different ways to manage a state in a React application? </h1>
                    <p>React is based on JavaScript, but it's mostly combined with JSX (JavaScript XML), a syntax extension that allows you to create elements that contain HTML and JavaScript at the same time. Anything you create with JSX could also be created with the React JavaScript API, but most developers prefer JSX because it's more intuitive. <br />
                    The Vue.js core library focuses on the View layer only. It's called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework. Although Vue is not strictly associated with the Model-View-ViewModel pattern, its design was partly inspired by it. With Vue, you'll be working mostly on the ViewModel layer, to make sure that the application data is processed in a way that allows the framework to render an up-to-date View. <br />
                    Angular templates are written in HTML but can also include Angular template syntax with special directives to output reactive data and render multiple elements, among other things.Services in Angular are used by Components to delegate business-logic tasks such as fetching data or validating input. They are a distinct part of Angular applications. While Angular doesn't enforce their use, it's highly suggested to structure apps as a set of distinct services that can be reused. Angular is built in TypeScript, so its use is recommended to get the most seamless experience, but plain JavaScript is also supported.
                     </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;