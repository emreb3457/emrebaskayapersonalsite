
// import { Form,Button,Container,Alert} from 'react-bootstrap';
// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import {Redirect} from 'react-router-dom';

// class NewForm extends Component {
//     static propTypes = {
//         newprojectItem: PropTypes.object.isRequired
//     }
//     state={
//         name:"",
//         link:"",
//         img:""
//     };
//     changeInput=(e)=>{
//         this.setState({
//             [e.target.name]:e.target.value,   
//         });
//     };
//     onSubmit=()=>{
//     this.props.submitProject(this.state);
//     setTimeout(() => {
//         window.location.reload();
//       }, 200);
//     }
   
    
            
    
//     render() {
        
//        const form=(
//         <Container>
//               <Form >
//           <Form.Group >
//             <Form.Label>Name</Form.Label>
//             <Form.Control type="label" name="name" value={this.state.names} onChange={this.changeInput} placeholder="Name" />

//             <Form.Label>Link</Form.Label>
//             <Form.Control type="label" name="link" value={this.state.link} onChange={this.changeInput} placeholder="Link" />
            
          
         
//             <Form.Label>Image</Form.Label>
//             <Form.Control type="file" name="img"/>
          
//             </Form.Group>
//           <Button variant="dark" onClick={this.onSubmit}>
//             Kaydet
//           </Button>
//           {this.props.newprojectItem.cath&&<Alert variant="danger">
//               Yüklemirken Bir Hata Oluştu
//             </Alert>
              
//           }
              
//         </Form>
//         </Container>
//        );
//        const session=sessionStorage.getItem("sessionUser");
           
      
//         return (
//                 <div>
//                     {session==="true"?form:<Redirect to="/project"/>}
//                 </div>
//         )
       
//     }
// }
// export default NewForm


   
