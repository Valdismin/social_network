import {addPostCreateAction, deletePost, profileReducer, ProfileType} from "../redux/porfile_reducer";

let state = {
    postsData: [
        {id: 1, message: 'Hi,how are you?', likesCount: 12},
        {id: 2, message: 'It is my first post', likesCount: 11},
        {id: 3, message: 'Bonjour', likesCount: 3},
    ],
    profile: null as ProfileType | null,
    status: ""
}

test("new post should be added",()=>{

    let action = addPostCreateAction("Очень крутой день!")

    let newState = profileReducer(state,action)

    expect(newState.postsData.length).toBe(4)
})
test("new message post text should be correct",()=>{

    let action = addPostCreateAction("Очень крутой день!")

    let newState = profileReducer(state,action)

    expect(newState.postsData[3].message).toBe("Очень крутой день!")

})
test("count of new message should be 0",()=>{

    let action = addPostCreateAction("Очень крутой день!")

    let newState = profileReducer(state,action)

    expect(newState.postsData[3].likesCount).toBe(0)
})

test("post should be deleted",()=>{

    let action = deletePost(3)

    let newState = profileReducer(state,action)

    expect(newState.postsData.length).toBe(2)
})

