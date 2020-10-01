import React, {useCallback, useEffect, useState} from "react";
import Item from "./Item/Item";
import './Pagination.css'

function Pagination(props) {

    let list = [
        {
            id: 1,
            name: 'Tạ Hoàng Bình',
            class: 'AT12E'
        },
        {
            id: 2,
            name: 'Phạm Tiến Dũng',
            class: 'AT12E'
        },
        {
            id: 3,
            name: 'Vũ Anh Quân',
            class: 'AT12E'
        },
        {
            id: 4,
            name: 'Phạm Huy Công',
            class: 'AT12E'
        },
        {
            id: 5,
            name: 'Nguyễn Hữu Hải',
            class: 'AT12E'
        },
        {
            id: 6,
            name: 'Tạ Hoàng Bình',
            class: 'AT12E'
        },
        {
            id: 7,
            name: 'Phạm Tiến Dũng',
            class: 'AT12E'
        },
        {
            id: 8,
            name: 'Vũ Anh Quân',
            class: 'AT12E'
        },
        {
            id: 9,
            name: 'Phạm Huy Công',
            class: 'AT12E'
        },
        {
            id: 10,
            name: 'Nguyễn Hữu Hải',
            class: 'AT12E'
        },
        {
            id: 11,
            name: 'Tạ Hoàng Bình',
            class: 'AT12E'
        },
        {
            id: 12,
            name: 'Phạm Tiến Dũng',
            class: 'AT12E'
        },
        {
            id: 13,
            name: 'Vũ Anh Quân',
            class: 'AT12E'
        },
        {
            id: 14,
            name: 'Phạm Huy Công',
            class: 'AT12E'
        },
        {
            id: 15,
            name: 'Nguyễn Hữu Hải',
            class: 'AT12E'
        },
        {
            id: 16,
            name: 'Tạ Hoàng Bình',
            class: 'AT12E'
        },
        {
            id: 17,
            name: 'Phạm Tiến Dũng',
            class: 'AT12E'
        },
        {
            id: 18,
            name: 'Vũ Anh Quân',
            class: 'AT12E'
        },
        {
            id: 19,
            name: 'Phạm Huy Công',
            class: 'AT12E'
        },
        {
            id: 20,
            name: 'Nguyễn Hữu Hải',
            class: 'AT12E'
        },
        {
            id: 21,
            name: 'Tạ Hoàng Bình',
            class: 'AT12E'
        },
        {
            id: 22,
            name: 'Phạm Tiến Dũng',
            class: 'AT12E'
        },
        {
            id: 23,
            name: 'Vũ Anh Quân',
            class: 'AT12E'
        },
        {
            id: 24,
            name: 'Phạm Huy Công',
            class: 'AT12E'
        },
        {
            id: 25,
            name: 'Nguyễn Hữu Hải',
            class: 'AT12E'
        }
    ]
    let [currentPage, setCurrentPage] = useState(1)
    let [recordPerPage, setRecordPerPage] = useState(3)
    let [listPaginate, setListPaginate] = useState([])
    let pageNum = Math.ceil(list.length / recordPerPage)

    useEffect(renderList, [])

    function renderList() {
        return setListPaginate(list.slice((currentPage - 1) * recordPerPage, currentPage * recordPerPage))
    }

    let item = []

    for (const [index, value] of listPaginate.entries()) {
        item.push(<Item key={index} student={value}/>)
    }

    function prevPage() {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
        renderList()
    }

    function nextPage() {
        if (currentPage < pageNum) {
            setCurrentPage(currentPage + 1)
        }
        renderList()
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Class</td>
                    </tr>
                </thead>
                <tbody>
                    {item}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Class</td>
                    </tr>
                </tfoot>
            </table>
            <div>
                <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
                <button disabled={currentPage === pageNum} onClick={nextPage}>Next</button>
            </div>
        </div>
    )
}

export default Pagination
