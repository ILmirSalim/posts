import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { editPost } from "../../../redux/slices/postsSlice";
import { PostForm } from "../components/PostForm";

export const EditPostPage = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {list} = useSelector((state) => state.posts.posts)
   
    const onSubmitForm = (formValues) => {
        dispatch(editPost(formValues))
    }
   
    if (!list) {
        return<>Пост не найден</>
    }
    const findedPost = list.find((item) => item.id===Number(id))

    return <PostForm title={`Редактирование поста - ${id}`} onSubmitForm={onSubmitForm} defaultValues={findedPost}/>
}