export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 }, {
        field: "user", headerName: "User", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName: "Email", width: 230
    },
    {
        field: "age", headerName: "Age", width: 100
    },
    {
        field: "status", headerName: "status", width: 160, renderCell: (params) => {
            return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

]

//temporary
export const userRows = [
    {
        id: 1,
        username: "Muhammad",
        img: "https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "active",
        email: "Muhammad323@gamil.com",
        age: 23,
    },
    {
        id: 2,
        username: "Jhon",
        img: "https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "passive",
        email: "Jhon132@gamil.com",
        age: 39,
    },
    {
        id: 3,
        username: "Talha",
        img: "https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "pending",
        email: "Talha435@gamil.com",
        age: 31,
    },
    {
        id: 4,
        username: "khalid",
        img: "https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "active",
        email: "Khalid524@gamil.com",
        age: 19,
    },
    {
        id: 5,
        username: "Usman",
        img: "https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "passive",
        email: "Usman385@gamil.com",
        age: 23,
    },
    {
        id: 6,
        username: "Amar",
        img: "https://images.pexels.com/photos/11172946/pexels-photo-11172946.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status: "active",
        email: "Amar462@gamil.com",
        age: 34,
    },
]