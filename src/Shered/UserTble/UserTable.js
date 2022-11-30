
import React from 'react';

const UserTable = ({ users,handelUpdate,deleteUser }) => {
    return (
       <>
       
       <tr>
                        <td><div className="avatar">
                            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='' src={users?.photoUR} />
                            </div>
                        </div></td>
                        <td>{users?.userName}</td>
                        <td>{users?.email}</td>
                        <td>
                            <button onClick={()=>deleteUser(users)} className='btn btn-sm btn-ghost mr-3'>delete</button>
                            <button onClick={()=>handelUpdate(users)} className={`${users.status===true ? "disabled btn-ghost btn btn-sm ":'btn-primary btn-sm'}`}>{users.status === true ? 'verify'  : "not verify"}</button>
                        </td>
                    </tr>
       </>
    );
};

export default UserTable;