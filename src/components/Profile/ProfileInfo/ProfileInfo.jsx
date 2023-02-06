import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />;
    }
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + decription</div>
        </div>
    );
};

export default ProfileInfo;
