import React, { Component } from 'react'

class InfoTable extends Component {
    constructor(props) {
        super(props)
        this.state={
            Names: [
                {
                  "id": "1",
                  "first": "John",
                  "last": "Smith",
                  "history": "A",
                  "science": "B",
                  "math": "C"
                },
                {
                  "id": "2",
                  "first": "Susie",
                  "last": "Phillips",
                  "history": "C",
                  "science": "A",
                  "math": "B"
                },
                {
                  "id": "3",
                  "first": "Sammy",
                  "last": "Joseph",
                  "history": "B",
                  "science": "B",
                  "math": "C"
                },
                {
                  "id": "4",
                  "first": "Jane",
                  "last": "Doe",
                  "history": "A",
                  "science": "A",
                  "math": "A"
                }
              ]

        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.Names[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {
        return this.state.Names.map((Names) => {
            const {id,last, first, history, science, math} = Names
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{last}</td>
                    <td>{first}</td>
                    <td>{history}</td>
                    <td>{science}</td>
                    <td>{math}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>ShineForth University</h1>
                <table id="names">
                    <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default InfoTable
