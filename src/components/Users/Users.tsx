import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import {usersDataType} from "../../redux/users_reducer";
import {NavLink} from "react-router-dom";
import {Button} from "@material-ui/core";
import {Paginator} from "../common/Paginator/Paginator";


type usersAllType2 = {
    users: Array<usersDataType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
}

export const Users = (props: usersAllType2) => {

    return <div className={styles.usersWrapper}>

        <Paginator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   pageSize={props.pageSize}
                   totalItemsCount={props.totalUsersCount}/>

        <div className={styles.users}>
            {
                props.users.map(u => <div className={styles.user} key={u.id}>
            <span>
               <div>
                   <NavLink to={"profile/" + u.id}>
                  <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                   </NavLink>
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
                        <div>
                            {u.followed ? <Button variant="contained" size="small" color="primary"
                                                  disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {
                                                      props.unfollow(u.id)
                                                  }}
                                >Unfollow</Button>

                                :

                                <Button variant="contained" size="small" color="primary"
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.follow(u.id)
                                        }}
                                >Follow</Button>}
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}