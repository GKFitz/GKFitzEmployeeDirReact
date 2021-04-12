import React from 'react'

export default function EmployeeRow(props) {
    return (
        <tr>
            <td>
                {props.firstName}
            </td>
            <td>
                {props.lastName}

            </td>
            <td>
                {props.email}
            </td>
            

        </tr>
    )
}
