import React, { Component } from 'react';

import FormData from './FormData'
import LetterPreview from './LetterPreview'

import DocxReader from './services/DocxReader'
import DateString from './services/DateService'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      addressee: '',
      remitter: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // This function handle the change in the input fields
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit() {
    const data = {
      ...this.state,
      date: DateString()
    } 
    const reader = new DocxReader()

    reader.loadRemoteFile('/templates/template.docx', data)
      .then(file => {
        reader.saveFile(file)
      })
      .catch(err => console.log('error: ', err))
  }

  render() {
    return (
      <div className="container">
        <h1 className="title text-center">Converter docx</h1>
        <div className="col-sm-6 col-md-4">
          <FormData
            {...this.state}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div className='col-sm-6 col-md-8' >
          <LetterPreview
            {...this.state}
          />
        </div>
      </div>
    );
  }
}

export default App;
