import React from "react";
import s from'./Profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
      </div>
      <div>ava + decription</div>
      <div>
        my post
        <div>New post</div>
      </div>
      <div className={s.posts}>
        <div className={s.item}>post1</div>
        <div className={s.item}>post2</div>
      </div>
    </div>
  );
};

export default Profile;
