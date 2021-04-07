import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: ''
        }
    }

    render() {
        return(
            <div>
                <div className="container">
                    <div className="form-div">
                        <form>
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
                            className='btn btn-danger'
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default App