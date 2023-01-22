import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts = {props.state.posts} addPost = {props.addPost}/>
        </div>
    );
};

export default Profile;
