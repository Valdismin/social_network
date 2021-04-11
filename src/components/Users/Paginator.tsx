import React from "react";
import styles from "./users.module.css";



type paginatorPropsType = {
    pageSize: number
    currentPage: number
    totalUsersCount: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: paginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; ++i) {
        pages.push(i)
    }
    return  <div>
            {pages.map(p => {
                // @ts-ignore
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
}