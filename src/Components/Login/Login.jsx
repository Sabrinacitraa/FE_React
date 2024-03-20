// import React, {useState} from 'react';
// import './Login.css';
// import logo from '../../Assets/logo.jpg';


// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { email: '' };
//         this.state = { pass: '' };

//         this.handleChangeEmail = this.handleChangeEmail.bind(this);
//         this.handleChangePass = this.handleChangePass.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChangeEmail(event) {
//         this.setState({ email: event.target.email });
//     }
//     handleChangePass(event) {
//         this.setState({ pass: event.target.pass });
//     }

//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }
//     render() {
//         return (
//             <>
//                 <div class="background">
//                     <div class="content"> </div>
//                 </div>

//                 <div class="container">
//                     <div class="box">

//                         <div class="header">
//                             <div class="text">
//                                 <h1> Local concepts with a</h1>
//                                 <h1> Global reach</h1>
//                             </div>
//                             <div class="logo">
//                                 <img src={logo} className='App-logo' alt="Logo"></img>
//                             </div>

//                             <div class="form">
//                             <div class="item">
//                                 <form onSubmit={this.handleSubmit}>
//                                     <label class = "tittle">
//                                         Email:
//                                         <br />
//                                         <input class = "form-login" type="text" value={this.state.value} onChange={this.handleChangeEmail} />
//                                     </label>
//                                     <br />
//                                     <br />
//                                     <br />
//                                     <label class = "tittle">
//                                         Password:
//                                         <br />
//                                         <input class = "form-login" type="text" value={this.state.value} onChange={this.handleChangePass} />
//                                     </label>
//                                     <br />
//                                     <br />
//                                     <br />
//                                     <input class="submit-btn" type="submit" value="Login" />
//                                 </form>
//                             </div>
//                         </div>
//                         </div>
                        
//                     </div>
//                 </div>
//             </>
//         );
//     }
// }

// export default Login;