import React from "react";

const Item = (props) => {
    return (
        <tr>
            <td>{ props.student.id }</td>
            <td>{ props.student.name }</td>
            <td>{ props.student.class }</td>
        </tr>
    )
}

export default Item
