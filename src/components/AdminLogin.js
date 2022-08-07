// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { Form,Button,Container, FormLabel} from 'react-bootstrap';
// import {Redirect} from 'react-router'
// import style from "../components/style/admin.module.css";
// export default class AdminLogin extends Component {
//     static propTypes = {
//         loginSubmit: PropTypes.func,
        
//     }
//     state={
//         username:"",
//         password:""
//     };
//     changeInput=(e)=>{
//       this.setState({
//           [e.target.name]:e.target.value
//       })
//     }
//     submitForm=()=>{
//         this.props.loginSubmit(this.state)
//         setTimeout(() => {
//             window.location.reload();
//           }, 200);
//     }

//     render() {
//         const form=(
//             <Container className={style.container}>
//               <Form className={style.form} >
//           <Form.Group>
//             <FormLabel></FormLabel>
//             <Form.Control type="label" name="username" value={this.state.username} onChange={this.changeInput} placeholder="UserName" />
//             <Form.Control type="password" name="password" value={this.state.password} onChange={this.changeInput} placeholder="Password" />
//             </Form.Group>
//           <Button variant="dark" onClick={this.submitForm}>
//             Giriş
//           </Button>
//           </Form>
//         </Container>
//         );
//         const session=sessionStorage.getItem("sessionUser");

//         return (
//             <div>
//                {session==="true"?<Redirect to="/project" ></Redirect>:form}
//             </div>
//         )
//     }
// }
