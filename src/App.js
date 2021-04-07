import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {

    constructor(){
        super()
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: ''
        }
        this.handleFullName = this.handleFullName.bind(this)
        this.handleUserName = this.handleUserName.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    //function for input value
    handleFullName(event){
        this.setState({
            fullName: event.target.value
        })
    }

    handleUserName(event){
        this.setState({
            userName: event.target.value
        })
    }

    handleEmail(event){
        this.setState({
            email: event.target.value
        })
    }

    handlePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const formValues = {
            fullName: this.state.fullName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }

    axios.post('http://localhost:4000/app/signup', formValues)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

    this.setState({
        fullName: '',
        userName: '',
        email: '',
        password: ''
    })
    }

    render() {
    console.log(this.state);
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form onSubmit={this.onSubmit}>
                            <input type='text'
                            placeholder='Full name'
                            onChange={this.handleFullName}
                            value={this.state.fullName}
                            className='form-control form-group'
                            />
                            <input type='text'
                            placeholder='User name'
                            onChange={this.handleUserName}
                            value={this.state.userName}
                            className='form-control form-group'
                            />
                            <input type='text'
                            placeholder='Email'
                            onChange={this.handleEmail}
                            value={this.state.email}
                            className='form-control form-group'
                            />
                            <input type='password'
                            placeholder='Password'
                            onChange={this.handlePassword}
                            value={this.state.password}
                            className='form-control form-group'
                            />
                            <input 
                            type='submit'
                            className='btn btn-danger btn-block'
                            value='Submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App