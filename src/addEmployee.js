import React, { useState, useEffect } from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import Input from 'react-bootstrap/InputGroup'
import axios from 'axios';
function CreateEmployee() {
    const [employee, setemployee] = useState({ qci_id: '', name: '', email: '', board: '', designation: '', type_of_employee: '', gender: '', bal_cl: '', bal_sl: '', bal_pl: '', bal_ml: '', bal_ptl: '', bal_eol: '', password: '' })
    const [showloading, setshowloading] = useState(false);
    const apiUrl = "http://127.0.0.1:5000/lms/addEmployee";

    const InsertEmployee = (e) => {
        e.preventDefault();
        const data = {
            qci_id: employee.qci_id, name: employee.name, email: employee.email, board: employee.board
            , designation: employee.designation, type_of_employee: employee.type_of_employee, gender: employee.gender, bal_cl: employee.bal_cl,
            bal_sl: employee.bal_sl, bal_eol: employee.bal_eol, bal_ml: employee.bal_ml, bal_pl: employee.bal_pl, bal_ptl: employee.bal_ptl, password: employee.password
        }
        axios.post(apiUrl, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOjEyMzR9.AkulsG22blITRUe4-iROKG25EIqT8H2-5HXLT93nQXc'
            }
        }
        ).then((result) => {
            console.log(result)
        })
    }
    const onChange = (e) => {
        e.persist();
        setemployee({ ...employee, [e.target.name]: e.target.value });
    }
    return (<div>
        <Container>
            <Form onSubmit={InsertEmployee}>
                <input type="text" placeholder="id" name="qci_id" value={employee.qci_id} onChange={onChange}></input>
                <input type="text" placeholder="name" name="name" id="name" value={employee.name} onChange={onChange} />


                <input type="text" placeholder="email" name="email" value={employee.email} onChange={onChange} />


                <input type="text" placeholder="board" name="board" value={employee.board} onChange={onChange} />


                <input type="text" placeholder="designation" name="designation" value={employee.designation} onChange={onChange} />


                <input type="text" placeholder="typeofemp" name="type_of_employee" value={employee.type_of_employee} onChange={onChange} />


                <input type="text" placeholder="gender" name="gender" value={employee.gender} onChange={onChange} />


                <input type="text" name="bal_cl" value={employee.bal_cl} onChange={onChange} />


                <input type="text" name="bal_sl" value={employee.bal_sl} onChange={onChange} />


                <input type="text" name="bal_pl" value={employee.bal_pl} onChange={onChange} />

                <input type="text" name="bal_ml" value={employee.bal_ml} onChange={onChange} />

                <input type="text" name="bal_ptl" value={employee.bal_ptl} onChange={onChange} />


                <input type="text" name="bal_eol" value={employee.bal_eol} onChange={onChange} />


                <input type="text" name="password" value={employee.password} onChange={onChange} />

                <Button type="submit">save</Button>
            </Form>
        </Container>
    </div>)
}
export default CreateEmployee;