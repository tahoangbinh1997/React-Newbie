import React, {useEffect, useState} from "react"
import Item from "./Item/Item"
import './Pagination.css'
import ListPageNum from "./ListPageNum/ListPageNum"

function Pagination(props) {

    let [list] = useState([
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
    ])
    let [currentPage, setCurrentPage] = useState(1)
    let [recordPerPage, setRecordPerPage] = useState(3)
    let [listPaginate, setListPaginate] = useState([])
    let pageNum = Math.ceil(list.length / recordPerPage)
    let listPageNum = []
    let item = []

    useEffect(renderListPagination, [list, currentPage, recordPerPage])

    function renderListPagination() {
        return setListPaginate(list.slice((currentPage - 1) * recordPerPage, currentPage * recordPerPage))
    }

    function renderItem () {
        let ranger = pageRanger(currentPage, pageNum)
        for (const [index, value] of listPaginate.entries()) {
            item.push(<Item key={index} student={value}/>)
        }

        // render số trang trong pagination
        for (let i = ranger.start; i <= ranger.end; i++) {
            listPageNum.push(<ListPageNum key={i} pageNum={i} currentPage={currentPage} numClick={onChangeRecord}/>)
        }
    }
    renderItem()

    function prevPage() {
        if (currentPage >= 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function nextPage() {
        if (currentPage <= pageNum) {
            setCurrentPage(currentPage + 1)
        }
    }

    function onChangeRecord(event) {
        let pageNumber = Number(event.target.value)
        setCurrentPage(pageNumber)
    }

    function changeRecord(event) {
        let recordNumber = Number(event.target.value)
        setRecordPerPage(recordNumber)
        setCurrentPage(1)
    }

    function pageRanger(currentPage, pageNum) {
        let start = currentPage - 2
        let end = currentPage + 2
        if (end > pageNum) {
            start -= (end-pageNum)
            end = pageNum
        }
        if (start <= 0) {
            end += ((start-1)*(-1))
            start = 1
        }

        end = end > pageNum? pageNum:end
        return {start: start, end: end}
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
            <div className={'center'}>
                <div className={'pagination'}>
                    <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
                    {listPageNum}
                    <button disabled={currentPage === pageNum} onClick={nextPage}>Next</button>
                </div>
                <select name="recordList" id="record_list" onChange={changeRecord}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    )
}

export default Pagination
