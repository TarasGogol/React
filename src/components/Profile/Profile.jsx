import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     newPostText = {props.profilePage.newPostText}
                     dispatch = {props.dispatch}/>
        </div>
    );
};

export default Profile;
