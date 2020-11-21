import React from 'react'
import userPhoto from "../../assets/images/user.png";
import styles from "./users.module.css";
import axios from "axios";
import {usersDataType} from "../../redux/users_reducer";

type usersAllType = {
    users: Array<usersDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    set_users: (usersData: Array<usersDataType>) => void
}

export class Users extends React.Component<usersAllType>{

    componentDidMount() {


            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                    this.props.set_users(response.data.items)
                }
            )
    }


    render () {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
            <span>
               <div>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
               </div>
                <div>
                    {u.followed ? <button onClick={() => {
                        this.props.unfollow(u.id)
                    }}>Unfollow</button> : <button onClick={() => {
                        this.props.follow(u.id)
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

}