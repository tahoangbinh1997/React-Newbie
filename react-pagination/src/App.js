import React from 'react';
import './App.css';
import Pagination from "./components/Pagination/Pagination";
import PropTypes from 'prop-types'

function App() {
    return (
        <div>
            <Pagination options={App.defaultProps.options}/>
        </div>
    );
}
const list = [
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

App.defaultProps = {
    options: {
        list: list,
        recordPerPage: 3,
        currentPage: 1,
        arrowPagination: true,
        recordList: {
            isShow: true,
            choices: [
                {
                    id: 1,
                    value: 5
                },
                {
                    id: 2,
                    value: 10
                },
                {
                    id: 3,
                    value: 15
                },
                {
                    id: 4,
                    value: 20
                }
            ]
        }
    }
}

App.propTypes = {
    options: PropTypes.shape({
        list: PropTypes.array,
        recordPerPage: PropTypes.number,
        currentPage: PropTypes.number,
        arrowPagination: PropTypes.bool,
        recordList: PropTypes.shape({
            isShow: PropTypes.bool,
            choices: PropTypes.arrayOf(PropTypes.object)
        })
    })
}

export default App;
