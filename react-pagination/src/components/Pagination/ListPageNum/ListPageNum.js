import React, {Component} from "react"
import './ListPageNum.css'

export default class ListPageNum extends Component {
    render() {
        return (
            <button className={this.props.currentPage === this.props.pageNum ? 'active': ''} onClick={this.props.numClick} value={this.props.pageNum}>{this.props.pageNum}</button>
        );
    }
}

// export default function ListPageNum(props) {
//     return (
//         <div>
//             <button>{props.pageNum.index}</button>
//         </div>
//     );
// }

// const ListPageNum = (props) => {
//     return (
//         <div>
//             <button>{props.pageNum.index}</button>
//         </div>
//     )
// }
//
// export default ListPageNum
