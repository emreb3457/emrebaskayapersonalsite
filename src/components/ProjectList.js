
// import PropTypes from 'prop-types'
// import style from './style/blog.module.css'
// import { Card,Container,Row,Col,Button } from 'react-bootstrap';
// import React, { Component } from 'react'
//  class ProjectList extends Component {
//     static propTypes = {
//         project:PropTypes.shape({
//             project:PropTypes.array.isRequired,
//             deleteProject:PropTypes.func
//             }).isRequired
//     }
//     state={
//         _id:""
//     }
//     dltProject=(e)=>{
  
//           this.props.deleteProject(this.state);
//           setTimeout(() => {
//             window.location.reload();
//           }, 100);
          
    
//     }

//     render() {
//         const emptyMessage = (
//             <p>There are no project yet.</p>
//         );
//         const session=sessionStorage.getItem("sessionUser");
//         const projlist=(
//          <div>
             
//             <Container>
                 
//                 {session==="true"&&<Button href="/newform" >New Project</Button> }
              
//             <Row>
                
//                {
//                    this.props.project.err?<h3>error</h3>
//                    :this.props.project.project.map(proje=>
                    
//                     <Col key={proje._id} className="col-sm-4">
                      
                        
//               <Card className={style.cards}>
//                   {session==="true"&& <Button id={proje._id} onDoubleClick={this.dltProject} onClick={()=>{this.setState({_id:proje._id})}} value="merhaba" className={style.deletebtn} variant="danger"><i className="far fa-trash-alt"></i></Button>}
//                  <a href={proje.link} target="_blank" className={style.link} >
                  
//             <Card.Img variant="top" src={proje.image} />
            
//             <Card.Body>
//             <Card.Title>{proje.name}</Card.Title>
//             </Card.Body>
//             <Card.Footer>
//             <small className="text-muted">{proje.date}</small>
//             </Card.Footer>
//             </a>
//         </Card>
//         </Col>
      
        
//         )
//                }
//            </Row>
//             </Container>
//             </div>
//          );
         
//         return (
//             <div>
//             { this.props.project.length === 0 ? emptyMessage : projlist  }
//             </div>
//         )
//     }
// }

// export default ProjectList

    
    

    

    
