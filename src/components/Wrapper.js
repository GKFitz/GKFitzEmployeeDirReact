import React, { Component } from 'react'

export default class Wrapper extends Component {
    render(props) {
        return (
            <div id= "everything">
                {this.props.children}
            </div>
        )
    }
}
