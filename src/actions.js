
import { redirect } from "react-router-dom"

// YOUR DEPLOYED API BASE URL
const URL = "https://upnextbe.onrender.com"

//createAction => create a media from form submissions to `/create`
export const createAction = async ({request}) => {
    // get form data
    const formData = await request.formData()

    // construct request body
    const newMedia = {
        title: formData.get("title"),
        release_date: formData.get("release_date"),
        image_link: formData.get("image_link"),
        priority: formData.get("priority"),
        tag: formData.get("tag"),
    }

    // send request to backend
    await fetch(URL + "/media/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedia)
    })

    // redirect back to index page
    return redirect("/")
}

//updateAction => update a media from form submissions to `/update/:id`
export const updateAction = async ({request, params}) => {
    // get form data
    const formData = await request.formData()

    // get media id
    const id = params.id

    // construct request body
    const updatedMedia = {
        title: formData.get("title"),
        release_date: formData.get("release_date"),
        image_link: formData.get("image_link"),
        priority: formData.get("priority"),
        tag: formData.get("tag"),
    }

    // send request to backend
    await fetch(URL + `/media/${id}/`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMedia)
    })

    // redirect back to show page page
    return redirect(`/post/${id}`)
}

//deleteAction => delete a media from form submissions to `/delete/:id`
export const deleteAction = async ({params}) => {
    // get media id
    const id = params.id

    // send request to backend
    await fetch(URL + `/media/${id}/`, {
        method: "delete",
    })

    // redirect back to show page page
    return redirect("/")
}