// import React, {Component} from 'react';
// import { connect } from 'react-redux'
// import PropTypes from 'prop-types';
// import ProjectList from '../ProjectList';
// import {fetchProject}from"../../action/project";
// import {deleteProject}from"../../action/projectactions";
// class ProjectPage extends Component {
//     static propTypes={
//         project:PropTypes.object.isRequired
//     }
//     componentDidMount() {
// 		this.props.fetchProject();
// 	}
// 	render() {
        
// 		return (
// 			<div  >
				
//                <ProjectList
//                deleteProject={this.props.deleteProject}
//                project={this.props.project}
//                 ></ProjectList>
               
// 			</div>
// 		);
// 	}
// }
// const mapStateToProps=({project})=>{
//     return{
//         project
//     }
// };
// const mapDispatchToProps ={
//     fetchProject,
//     deleteProject
// };
// export default connect(mapStateToProps,mapDispatchToProps )(ProjectPage);