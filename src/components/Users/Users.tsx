import React from 'react'
import styles from './users.module.css'
import {usersDataType} from "../../redux/users_reducer";
import axios from 'axios'
import userPhoto from '../../assets/images/user.png'

type usersAllType = {
    users: Array<usersDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    set_users: (usersData: Array<usersDataType>) => void
}

export let Users = (props: usersAllType) => {

    let getUsers = ()=>{

    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.set_users(response.data.items)
            }
        )
    }

    }

    return <div>
        <button onClick={getUsers}>get users</button>
        {
            props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
               </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        props.follow(u.id)
                    }}>Follow</button>}
                </div>
            </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>
            )
        }
    </div>
}