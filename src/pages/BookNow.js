import React, { Component } from "react";
import { Link } from "react-router-dom"
export class BookNow extends Component {
    state = {
        formValues: {
            firstName: "",
            lastName: "",
            fromDate: "",
            toDate: "",
            email: "",
            phone: "",
            adults: "",
            kids: "",
            special: "",
        },
    };

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;


        this.setState((prevState) => {
            return {

                ...prevState,
                formValues: {
                    ...prevState.formValues,
                    [name]: value,
                },
            };
        });


    };

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.state.formValues;
        console.log("**************");
        console.log(user);

    };

    render() {
        return (
            <div className="bok">
                <h2 classname="title">Hotel Reservation Form</h2>
                <h3>Please complete the form below.</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="x">
                        <div>
                            <label className="su" for='firstName'>First Name:</label>
                            <input
                                className="in"
                                id='firstName'
                                type="text"
                                name="firstName"
                                onChange={(e) => this.handleChange(e)}
                                placeholder='   Enter Your First Name'
                            />
                        </div>
                        <div>
                            <label className="su" for='lasttName'>Last Name:</label>
                            <input
                                className="in"
                                id='lasttName'
                                type="text"
                                name="lastName"
                                onChange={(e) => this.handleChange(e)}
                                placeholder='   Enter Your Last Name'
                            />
                        </div>

                        <br />
                        <br />
                        <br />

                        <div>
                            <label className="su" for='phone'>Phone Number:</label>
                            <input
                                className="in"
                                id='phone'
                                type="tel"
                                name="phone"
                                onChange={(e) => this.handleChange(e)}
                                placeholder=' Enter Your Phone Number'
                            />

                        </div>
                        <div>
                            <label className="su" for='email'>Email:</label>
                            <input
                                className="in"
                                id='email'
                                type="email"
                                name="email"
                                onChange={(e) => this.handleChange(e)}
                                placeholder='   Enter Your Email'
                            />
                        </div>


                        <br />
                        <br />

                        <div>
                            <label className="su" for='fromDate'> Date From:</label>
                            <input
                                className="in"
                                id='fromDate'
                                type='date'
                                name='fromDate'
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>
                        <div>
                            <label className="su" for='toDate'> Date To:</label>
                            <input
                                className="in"
                                id='toDate'
                                type='date'
                                name='toDate'
                                onChange={(e) => this.handleChange(e)}
                            />
                        </div>

                        <br />
                        <br />

                        <div>
                            <label className="su" for='adults'>Number of Adults:</label>
                            <input
                                className="in"
                                id='adults'
                                type="number"
                                name="adults"
                                onChange={(e) => this.handleChange(e)}
                                placeholder='   Enter The Number Of Guests'
                            />
                        </div>

                        <br />
                        <br />

                        <div>
                            <label className="su" for='kids'>Number of Kids (If there are any):</label>
                            <input
                                className="in"
                                id='kids'
                                type="number"
                                name="kids"
                                onChange={(e) => this.handleChange(e)}
                                placeholder='Enter The Number Of Kids'
                            />
                        </div>

                        <br />
                        <br />

                        <div>
                            <label className="ll" for='special'>Do you have any special request?</label>

                            <textarea
                                className="te"
                                id='special'
                                type="number"
                                name="special"
                                onChange={(e) => this.handleChange(e)}
                                placeholder='   Type here'
                                rows="5" cols="33"
                            />
                        </div>

                    </div>


                    <button className="mit" value="Submit">
                        <Link id="the" to={{ pathname: '/Cards', state: { formValues: this.state.formValues } }}>
                            Submit
                        </Link>

                    </button>
                </form >
            </div >
        );
    }
}

export default BookNow;