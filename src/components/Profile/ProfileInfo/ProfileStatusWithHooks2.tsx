import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropstype = {
    status: string | null
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks2: React.FC<ProfileStatusPropstype> = (props) =>  {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        if(props.status)  setStatus((props.status).toString())
    },[props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        if(status) {
            props.updateStatus(status)
        }
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{!props.status ? status : props.status}</span>
            </div>}
            { editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                       value={status ? status : '----'} />
            </div>}
        </div>
    )
}

