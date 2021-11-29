import { faPlus, faCookieBite, faThList, faCheckCircle,faUserFriends} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex  justify-content-center  py-5 px-4" style={{ height: "100vh" }}>

            <ul className="list-unstyled py-3">
                <li>
                    <Link to="/admin/pending" className="">
                        <span style={{ color: 'blue', fontWeight: 'bold' }}><FontAwesomeIcon icon={faCookieBite} /> Pending Order</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/admin/delivery" className="">
                        <span style={{ color: 'blue', fontWeight: 'bold' }}><FontAwesomeIcon icon={faCheckCircle} /> Delivery Order</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/admin/addItem" className="">
                        <span style={{ color: 'blue', fontWeight: 'bold' }}><FontAwesomeIcon icon={faPlus} /> Add Book</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/admin/addQuestion" className="">
                        <span style={{ color: 'blue', fontWeight: 'bold' }}><FontAwesomeIcon icon={faPlus} /> Add Question</span>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/admin/itemList" className="">
                        <span style={{ color: 'blue', fontWeight: 'bold' }}> <FontAwesomeIcon icon={faThList} /> Book List</span>
                    </Link>
                </li>
                <br />

                <li>
                    <Link to="/admin/addTeacher" className="">
                        <span style={{color: 'blue', fontWeight: 'bold'}}> <FontAwesomeIcon icon={faUserFriends} /> Add Teacher</span>
                    </Link>
                </li>

            </ul>

        </div>
    );
};

export default AdminSidebar;