import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg",
                followed: true,
                fullName: 'Taras',
                status: 'Hi, how are you',
                location: {city: "Kiev", country: "Ukraine"}
            },
            {
                id: 2,
                photoUrl: "https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg",
                followed: false,
                fullName: 'Ivan',
                status: 'Hi, brooo',
                location: {city: "Ivano-Frankivsk", country: "Ukraine"}
            },
            {
                id: 3, photoUrl: "https://www.meme-arsenal.com/memes/68c2a221bca55e0c5fec6213dc185d0d.jpg",
                followed: true, fullName: 'Vasyl', status: 'Hi, fd', location: {city: "Chernivtsi", country: "Ukraine"}
            },
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users