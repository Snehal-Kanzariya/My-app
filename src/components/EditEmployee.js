import React, { useState } from 'react'


export const EditEmployee = ({ data, onUpdate }) => {
    const [editData, setEditData] = useState(data);
    const onChange = e => {
        // console.log("Edit :" + e.target.value);
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }
    return (
        <div>
            <form>
                <label>Name</label>
                <input type="text" name="name" value={editData.name} onChange={onChange} />
                <label>Role</label>
                <input type="text" name="role" value={editData.role} onChange={onChange} />
                <label>Birth_date</label>
                <input type="date" name="bdate" value={editData.bdate} onChange={onChange} />
                <label>Gender</label>
                <input type="text" name="gender" value={editData.gender} onChange={onChange} />
                {/* <label>Skills</label>
                <input type="text" name="skill" value={editData.skill.join()} onChange={onChange} />
                <label>Study</label>
                <input type="text" name="study" value={editData.study} onChange={onChange} /><br /><br /> */}
                <button onClick={(e) => {
                    e.preventDefault();
                    onUpdate(editData) }}>Update</button>

            </form>
        </div>
    )
}

