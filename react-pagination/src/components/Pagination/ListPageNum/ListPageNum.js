import React from "react"
import './ListPageNum.css'

export default function ListPageNum(props) {
    return (
        <button className={props.currentPage === props.pageNum ? 'active':''} onClick={props.numClick} value={props.pageNum}>{props.pageNum}</button>
    );
}
