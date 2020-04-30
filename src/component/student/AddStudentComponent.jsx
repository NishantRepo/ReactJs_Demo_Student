import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class AddStudentComponent extends Component{

    constructor(props){
        super(props);
        this.state ={
            id: '',
            name: '',
            address: '',
            message: null
        }
        this.saveStudent = this.saveStudent.bind(this);
    }
    saveStudent = (e) => {
        e.preventDefault();
        let student = {id: this.state.id, name: this.state.name, address: this.state.address}
        ApiService.saveStudent(student)
        .then(response => {
        this.setState({message : 'Student added successfully.'});
        this.props.history.push('/student');
        })
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return(
            <div>
                <h2 className="text-center">Add Student</h2>
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

export default AddStudentComponent;