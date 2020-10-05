import React, {useCallback, useMemo, useState} from "react"
import Item from "./Item/Item"
import './Pagination.css'
import ListPageNum from "./ListPageNum/ListPageNum"

export default Pagination

function Pagination(props) {

    let [list] = useState(props.options.list)
    let [currentPage, setCurrentPage] = useState(props.options.currentPage)
    let [recordPerPage, setRecordPerPage] = useState(props.options.recordPerPage)
    let [listPaginate, setListPaginate] = useState([])
    let pageNum = Math.ceil(list.length / recordPerPage)
    let listPageNum = []
    let item = []
    let tableHeader = []
    let recordChoices = []

    const renderListPagination = () => {
        setListPaginate(prevState => list.slice((currentPage - 1) * recordPerPage, currentPage * recordPerPage))
    }

    const onChangeRecord = useCallback((event) => {
        let pageNumber = Number(event.target.value)
        setCurrentPage(pageNumber)
    }, [currentPage])

    const prevPage = useCallback(() => {
        if (currentPage >= 1) {
            setCurrentPage(currentPage - 1)
        }
    }, [currentPage])

    const nextPage = useCallback(() => {
        if (currentPage <= pageNum) {
            setCurrentPage(currentPage + 1)
        }
    }, [currentPage])

    const changeRecord = useCallback((event) => {
        let recordNumber = Number(event.target.value)
        setRecordPerPage(recordNumber)
        setCurrentPage(1)
    }, [currentPage])

    const pageRanger = (currentPage, pageNum) => {
        let start = currentPage - 1
        let end = currentPage + 1
        if (end > pageNum) {
            start -= (end - pageNum)
            end = pageNum
        }
        if (start <= 0) {
            end += ((start - 1) * (-1))
            start = 1
        }

        end = end > pageNum ? pageNum : end
        return {start: start, end: end}
    }

    //dùng useMemo khi nào prop list, currentPage, recordPerPage thay đổi thì hàm renderListPagination mới được chạy
    useMemo(renderListPagination, [list, currentPage, recordPerPage])

    const renderItem = () => {
        let ranger = pageRanger(currentPage, pageNum)
        let thead = listPaginate[0] ? Object.getOwnPropertyNames(listPaginate[0]) : []
        let {isShow, choices} = props.options.recordList
        console.log(currentPage)

        // render danh sách đã phân trang
        for (const [index, value] of listPaginate.entries()) {
            item.push(<Item key={index} student={value}/>)
        }

        for (const [index, value] of thead.entries()) {
            tableHeader.push(<td key={index}>{value.charAt(0).toUpperCase() + value.slice(1)}</td>)
        }

        for (const [index, value] of choices.entries()) {
            recordChoices.push(<option value={value.value} key={index}>{value.value}</option>)
        }

        // render số trang trong pagination
        if (pageNum >= 6) {
            if (currentPage < pageNum - 2) {
                for (let i = ranger.start; i <= ranger.end; i++) {
                    listPageNum.push(<ListPageNum key={i} pageNum={i} currentPage={currentPage}
                                                  numClick={onChangeRecord}/>)
                }

                listPageNum.push(<p key={pageNum - 1}>...</p>)

                listPageNum.push(<ListPageNum key={pageNum} pageNum={pageNum} currentPage={currentPage}
                                              numClick={onChangeRecord}/>)

            } else if (currentPage < pageNum - 1) {
                for (let i = ranger.start; i <= ranger.end; i++) {
                    listPageNum.push(<ListPageNum key={i} pageNum={i} currentPage={currentPage}
                                                  numClick={onChangeRecord}/>)
                }

                listPageNum.push(<ListPageNum key={pageNum} pageNum={pageNum} currentPage={currentPage}
                                              numClick={onChangeRecord}/>)
            } else {
                for (let i = ranger.start - 1; i <= ranger.end; i++) {
                    listPageNum.push(<ListPageNum key={i} pageNum={i} currentPage={currentPage}
                                                  numClick={onChangeRecord}/>)
                }
            }
        } else {
            for (let i = ranger.start; i <= ranger.end; i++) {
                listPageNum.push(<ListPageNum key={i} pageNum={i} currentPage={currentPage} numClick={onChangeRecord}/>)
            }
        }
    }

    //dùng useMemo khi nào prop listPaginate thay đổi thì hàm renderItem mới được chạy
    useMemo(renderItem, [listPaginate])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    {tableHeader}
                </tr>
                </thead>
                <tbody>
                {item}
                </tbody>
                <tfoot>
                <tr>
                    {tableHeader}
                </tr>
                </tfoot>
            </table>
            <div className={'center'}>
                {props.options.arrowPagination
                    ?
                    <div className={'pagination'}>
                        <button disabled={currentPage === 1} onClick={prevPage}>Prev</button>
                        {listPageNum}
                        <button disabled={currentPage === pageNum} onClick={nextPage}>Next</button>
                    </div>
                    :
                    <div className={'pagination'}>
                        {listPageNum}
                    </div>
                }
                {props.options.recordList && props.options.recordList.isShow
                    ?
                    <select name="recordList" id="record_list" onChange={changeRecord}>
                        {recordChoices}
                    </select>
                    :
                    ''
                }
            </div>
        </div>
    )
}
