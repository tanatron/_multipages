import { useEffect, useState, useRef } from "react";
import { fetchTodos } from "../../data/todo";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Todo.css'
import { Form } from "react-bootstrap";

const initItemPerPage = 10
const iniOnlyWaiting = false

function Todo() {
    // todoraw
    const [todosRaw, setTodosRaw] = useState([])
    // filter
    const [onlyWaiting, setOnlyWaiting] = useState(false)
    const [itemPerPage, setItemPerPage] = useState(10)
    // todo
    const [todos, setTodos] = useState([])
    // display

    const [numPage, setNumPage] = useState(1)
    const [curPage, setCurPage] = useState(1)

    useEffect(() => {
        // curPage  > numPage ? setCurPage(numPage) : null
        // setCurPage((p) => (p > numPage ? numPage : p))
        setCurPage(1)
    }, [numPage])

    useEffect(() => {
        console.log(`itemPerPage: ${itemPerPage}`);
        setNumPage(Math.ceil(todosRaw.length / itemPerPage))
    }, [itemPerPage, todosRaw])


    useEffect(() => {

    }, [onlyWaiting])


    useEffect(() => {
        setTodosRaw(fetchTodos())
        setCurPage(1)
    }, [])


    useEffect(() => {
        if (onlyWaiting) {
            // Show only waiting
            setTodos(todosRaw.filter((todo) => !todo.completed))
        } else {
            // Show all
            setTodos(todosRaw)
        }
    }, [todosRaw, onlyWaiting, itemPerPage])


    //  events handlers
    function deleteClick(id) {
        //todosRaw  => todo
        const todosRemain = todosRaw.filter((todo) => {
            return todo.id !== id
        })
        setTodosRaw(todosRemain)
    }

    function waithingClick(id) {

        const todoSelected = todosRaw.find((todo) => {
            return todo.id === id
        })

        todoSelected.completed = true
        setTodosRaw([...todosRaw])
    }

    function addClick(id, title) {
        const newItem = {
            id,
            title,
            completed: false,
            userid: 1,
        }

        setTodosRaw([...todosRaw, newItem])
    }



    // modal handlers
    const [show, setShow] = useState(false);

    const newIdRef = useRef()
    const newTitleRef = useRef()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="todo-container">
            {/* modal  */}
            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title><span className="bi bi-plus-lg">&nbsp;Add Todo</span></Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>ID :</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                disabled value={
                                    Number(todosRaw.reduce((prev, todo) => {
                                        return todo.id > prev ? todo.id : prev
                                    }, 0)) + 1
                                }
                                ref={newIdRef}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Title :</Form.Label>
                            <Form.Control
                                type="text"
                                autoFocus
                                ref={newTitleRef}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        <span className="bi bi-x-lg">
                            &nbsp;Cancel
                        </span>
                    </Button>
                    <Button variant="primary" onClick={() => {
                        // Todo
                        const id = newIdRef.current.value
                        const title = newTitleRef.current.value.trim()
                        if (title === '') {
                            alert('Title cannot be empty')
                            newTitleRef.current.value = ''
                            newTitleRef.current.focus()
                        } else {
                            addClick(id, title)
                            handleClose()
                        }

                    }}>
                        <span className="bi bi-plus-lg">
                            &nbsp;Add
                        </span>
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* filters */}
            <div className="todo-filter-container">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={(e) => { setOnlyWaiting(e.target.checked) }} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked" >Show only&nbsp;
                        <button className="btn btn-warning">waiting&nbsp;
                            <span className="bi bi-clock"></span>
                        </button>
                    </label>
                </div>

                <select className="form-select" aria-label="Default select example" defaultValue={10}
                    style={{ width: '200px' }}
                    onChange={(e) => { setItemPerPage(e.target.value) }}
                >

                    <option value={5}>5 item per page</option>
                    <option value={10} selected>10 item per page</option>
                    <option value={50}>50 item per page</option>
                    <option value={100}>100 item per page</option>
                </select>
            </div>


            {/* table */}
            <table className="table table table-striped todo-table">
                <thead className="table-dark">
                    <tr>
                        <th style={{ width: '5%' }} valign="middle">ID</th>
                        <th valign="middle">TITLE</th>
                        <th style={{ textAlign: 'right', width: '20%' }} valign="middle">
                            Completed&nbsp;
                            <button className="btn btn-primary"
                                onClick={() => handleShow()}
                            >
                                <span className="bi bi-plus-lg"></span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td><span className="badge bg-secondary">1</span></td>
                        <td style={{ textAlign: 'left' }}>2</td>
                        <td style={{ textAlign: 'right' }}>done
                            <button className="btn  btn-danger"><span><i class="bi bi-trash3"></i></span>
                            </button>
                        </td>
                    </tr> */}

                    {
                        // itemPerPage = 5


                        todos.filter((todo, index) => {
                            const min = (curPage - 1) * itemPerPage
                            const max = curPage * itemPerPage - 1
                            return index >= min && index <= max
                        }).map((todo) => {
                            return (
                                <tr key={todo.id}>
                                    <td valign="middle">
                                        <span className='badge bg-secondary' style={{ width: '2rem' }}>
                                            {todo.id}
                                        </span>
                                    </td>
                                    <td style={{ textAlign: 'left' }} valign="middle">{todo.title}</td>
                                    <td style={{ textAlign: 'right' }} valign="middle">
                                        {todo.completed ? (
                                            <span className='badge bg-success'>
                                                done&nbsp;
                                                <span className='bi bi-check'></span>
                                            </span>
                                        ) : (
                                            <button className='btn btn-warning'
                                                onClick={() => {
                                                    waithingClick(todo.id)
                                                }}>
                                                waiting&nbsp;
                                                <span className='bi bi-clock'></span>
                                            </button>
                                        )}
                                        &nbsp;
                                        <button className='btn btn-danger'
                                            onClick={() => { deleteClick(todo.id) }}
                                        >
                                            <span className='bi bi-trash'></span>
                                        </button>
                                    </td>
                                </tr>

                            )
                        }
                        )}
                </tbody>
            </table>
            {/* page control */}
            <div>
                <button className="btn btn-outline-primary todo-space"
                    onClick={() => setCurPage(1)}
                    disabled={curPage === 1}
                >First
                </button>
                <button className="btn btn-outline-primary todo-space"
                    onClick={() => curPage > 1 && setCurPage(curPage - 1)}
                    disabled={curPage === 1}
                >Previous
                </button>
                <span className="todo-space">{curPage}&nbsp;/&nbsp;{numPage}</span>
                <button className="btn btn-outline-primary todo-space"
                    onClick={() => curPage < numPage && setCurPage(curPage + 1)}
                    disabled={curPage === numPage}
                >Next
                </button>
                <button className="btn btn-outline-primary todo-space"
                    onClick={() => setCurPage(numPage)}
                    disabled={curPage === numPage}
                >Last
                </button>
            </div>
        </div>
    );
}

export default Todo;
