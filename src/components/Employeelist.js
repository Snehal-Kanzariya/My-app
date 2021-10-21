import { useState } from "react";
import { data } from "../data";
import { EditEmployee } from "./EditEmployee";

export const Employeelist = () => {
    const [selectedEmployeeData, setSelectedEmployeeData] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [empData, setEmptData] = useState(data);
    const onEdit = (data) => {
        setIsEdit(true);
        setSelectedEmployeeData(data);
        // console.log(JSON.stringify(data));
    }

    const onUpdate = (data) => {
        setIsEdit(false);
        let updatedEmpData = empData.map(item => {
            if (item.id === data.id) {
                return data;
            }
            // console.log("old data" + JSON.stringify(item));
            return item;
        })
        // console.log(updatedEmpData);
        // console.log(data);
        setEmptData(updatedEmpData);
    }
    return (
        <div>
            {/* {empData.length} */}
            <table border="2">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Birth_Date</th>
                        <th>Gender</th>
                        <th>Skills</th>
                        <th>Study</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {empData.map(item => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td>{item.birth_date}</td>
                            <td>{item.gender}</td>
                            <td>{item.skills}</td>
                            <td>{item.study.map(study => {
                                return <tr>
                                    <td>{study.title}</td>
                                    <td>{study.location}</td>
                                </tr>

                            })}</td>
                            <td><button onClick={() => onEdit(item)}>Edit</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
            {isEdit &&
                <EditEmployee data={selectedEmployeeData} onUpdate={onUpdate} />}
        </div >
    )
}