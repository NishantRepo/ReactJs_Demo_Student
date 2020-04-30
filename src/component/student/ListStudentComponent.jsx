import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListStudentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            students: [
                {id : "1", name : "Nishant", address : "Pune"},
                {id : "2", name : "Prashant", address : "ABD"},
                {id : "3", name : "VISHETA", address : "Pune"}
            ],
            message: null
        }
        this.reloadStudentList = this.reloadStudentList.bind(this);
        this.addStudent = this.addStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
    }

     componentDidMount() {
        this.reloadStudentList();
    }

    reloadStudentList() {
        ApiService.getStudent()
            .then((student) => {
                this.setState({ students: student.data })
            });
    }

    updateStudent(student) {
        window.localStorage.setItem("stud", student);
        this.props.history.push('/update-student');
    }
    addStudent() {
         window.localStorage.removeItem("stud");
         this.props.history.push('/add-student');
    }

    deleteStudent(student) {
        ApiService.deleteStudent(student)
        .then( response => {
            this.setState({message: 'Student deleted successfully.'});
            this.setState({students: this.state.students.filter(stud => student.id !== stud.id)});
        })
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Student Details</h2>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addStudent()}> Add Student</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Addreses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                                student =>
                                    <tr >
                                        <td>{student.id}</td>
                                        <td>{student.name}</td>
                                        <td>{student.address}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteStudent(student)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.updateStudent(student)} style={{marginLeft: '20px'}}> Update</button>
                                       </td>
                                    </tr>
                             )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ListStudentComponent;