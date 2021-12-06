import React, {
    useEffect,
    useState
} from 'react';
// import DataTable from 'react-data-table-component';
// import { Link } from 'react-router-dom';
// import { useForm } from 'react-hook-form';
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { useHistory, useParams } from 'react-router';
import UpdateQuestion from '../UpdateQuestion/UpdateQuestion';
const QuestionProfile = () => {
    const { id } = useParams();
    const [question, setQuestion] =useState([])
    const email = sessionStorage.getItem('email')
    let history = useHistory();
    useEffect(() => {
        if (email !== "admin@gmail.com") {
            sessionStorage.clear();
            localStorage.clear();
            window.location.assign("/");
        }
    }, [email])
    useEffect(() => {
        fetch(`http://localhost:4200/question/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                window.scrollTo(0, 0);
                setQuestion(data);
      
            })
    }, [id])
    const [modalIsOpen, setIsOpen] = useState(false);
    // const [item, setItem] = useState();
    function openModal(data) {
        // setItem(data)
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    // const [file, setFile] = useState(null);
    // const handleFileChange = (e) => {
    //     const newFile = e.target.files[0];
    //     setFile(newFile);
    // }


    // const onSubmit = data => {
    //     const formData = new FormData();
    //     formData.append('file', file);
    //     formData.append('title', data.title);
    //     formData.append('price', data.price);
    //     formData.append('description', data.description);
    //     formData.append('shortDescription', data.shortDescription);

    //      fetch('http://localhost:4200/addItem', {
    //         method: 'POST',
    //         body: formData
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             window.alert('Item added successfully');
    //             window.location.reload();
    //         })

    //         .catch(error => {
    //             console.error(error)
    //         })


    // }

    // useEffect(() => {
    //     setDept(JSON.parse(localStorage.getItem("dept")) || {});
    // }, [])
    // const [allquestions, setAllquestions] = useState([]);
 
  
    // const search = (rows) => {
    //     if (rows) {
    //         const columns = rows[0] && Object?.keys(rows[0]);
    //         return rows?.filter((row) =>
    //             columns?.some(
    //                 (column) =>
    //                     row[column]
    //                         ?.toString()
    //                         .toLowerCase()
    //                         .indexOf(query.toLowerCase()) > -1
    //             )
    //         );
    //     }
    // };

    // const customStyles = {
    //     rows: {
    //         style: {
    //             minHeight: "32px",
    //             width: "100%",
    //         },
    //     },
    //     headCells: {
    //         style: {
    //             padding: " 15px",
    //             background: 'blue',
    //             fontSize: "15px",
    //             color: 'white',
    //         },
    //     },
    //     cells: {
    //         style: {
    //             fontSize: "14px",
    //             padding: " 15px",
    //         },
    //     },
    // };
    const handleDelete = (id) => {
        fetch(`http://localhost:4200/deleteQuestion/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                localStorage.removeItem("student");
                alert('Deleted')
                if (result) {
                    history.goBack()
                }

            })
    }
    return (
        <div>
            <AdminHeader />
            <div className="d-flex">
                <div className="col-md-2">
                    <AdminSidebar />
                </div>
                <div style={{ backgroundColor: '#d6ffff', height: '100vh' }} className="col-md-10 pt-4">
                    <div className="text-center  text-primary">
                        <h2><u>Question</u></h2>
                    </div>
                    <div className="d-flex justify-content-center">
                            <div style={{border: '1px solid lightGray',boxShadow: '5px 5px 20px gray',padding: '30px'}}>
                                 <p style={{fontSize: '18px' }}><b>Question Name:</b> &nbsp; <span className="text-primary font-weight-bold">{question?.data?.question}</span></p>
                                 <p><b>Answer 1:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[0]}</span></p>  
                                 <p><b>Answer 2:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[1]}</span></p>  
                                 <p><b>Answer 3:</b> &nbsp; <span className="text-danger font-weight-bold text-capitalize">{question?.data?.answer[2]}</span></p>  
                                 <p><b>Answer 4:</b> &nbsp; <span className="text-danger  font-weight-bold text-capitalize">{question?.data?.answer[3]}</span></p> 
                                 <br />

                                  <p><b>Right Answer:</b> &nbsp; <span className="text-success font-weight-bold text-capitalize">{question?.data?.rightAnswer}</span></p>   
                            </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button  onClick={openModal}  className="btn btn-warning mx-2 font-weight-bold" >Update Question</button>
                        <UpdateQuestion modalIsOpen={modalIsOpen} question={question} closeModal={closeModal}></UpdateQuestion>
                        <button onClick={() => { if (window.confirm('Are You Sure?')) { handleDelete(question._id) }; }} className="btn btn-danger mx-2 font-weight-bold" >Delete Question</button>
                    </div>
                    {/* <div className="d-flex justify-content-center">
                        <div className="d-flex justify-content-start container col-6">
                            <form className="form-group">
                                <div className="container">
                                    <div className="form-inline d-flex justify-content-start">
                                        <label style={{ position: 'relative', right: '15px' }} className="font-weight-bold text-dark " htmlFor="filter">Search</label>
                                        <input
                                            style={{}}
                                            className="form-control"
                                            type="text"
                                            value={query}
                                            onChange={(e) => {
                                                setQuery(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
                    {/* <div className="d-flex justify-content-center">
                        <div className="col-6">   <div style={{ marginBottom: '100px' }} className="container pb-5 d-flex justify-content-center">


                            <DataTable
                                columns={columns}
                                data={search(questions)}
                                customStyles={customStyles}
                            // selectableRows
                            />
                        </div></div>
                    </div> */}
                </div>
            </div>

        </div>
    );
};

export default QuestionProfile;