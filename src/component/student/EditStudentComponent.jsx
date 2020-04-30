import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditStudentComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            address: '',
            errorMessage:'',
         }
        this.saveStudent = this.saveStudent.bind(this);
        this.loadStudent = this.loadStudent.bind(this);
    }

    componentDidMount() {
        this.loadStudent();
    }

    loadStudent() {
        ApiService.getStudentById(window.localStorage.getItem("studId"))
            .then((res) => {
                let student = res.data;
                this.setState({
                id: student.id,
                name: student.name,
                address: student.address,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveStudent = (e) => {
        e.preventDefault();
        let student = {id: this.state.id, name: this.state.name, address: this.state.address};
        ApiService.updateStudent(student)
            .then(res => {
                this.setState({message : 'Student added successfully.'});
                this.props.history.push('/student');
            })
            .catch((err) => {
                if(err.response) {
                    this.setState({errorMessage: err.response.data.message + ' with ID = ' +this.state.id })
                } else {
                    this.setState({errorMessage: err.message})
                }
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit Student</h2>
                { this.state.errorMessage && <h3 className="error" style={{style}}> { this.state.errorMessage } </h3> }
                <form>
                <div className="form-group">
                     <label>Id:</label>
                     <input type="number" placeholder="id" name="id" className="form-control" value={this.state.id} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange}/>
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input placeholder="address" name="address" className="form-control" value={this.state.address} onChange={this.onChange}/>
                 </div>
                    <button className="btn btn-success" onClick={this.saveStudent}>Save</button>
                </form>
            </div>
        );
    }
}

const style = {
    color: 'red',
}
export default EditStudentComponent;