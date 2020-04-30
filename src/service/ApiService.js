import axios from 'axios';

const STUDENT_API_BASE_URL = 'http://localhost:8081/student';

class ApiService {

    getStudent() {
        return axios.get(STUDENT_API_BASE_URL + '/getAll');
    }

    getStudentById(id) {
        return axios.get(STUDENT_API_BASE_URL + '/get?id='+id);
    }

    saveStudent(student) {
        return axios.post(STUDENT_API_BASE_URL + '/create', student);
    }

    updateStudent(student) {
        return axios.post(STUDENT_API_BASE_URL + '/update', student)
    }
    deleteStudent(student) {
        return axios.post(STUDENT_API_BASE_URL + '/delete', student);
    }
}

export default new ApiService();