import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import axios from "../../axios";

import { UserInfo } from "../UserInfo";
import { PostSkeleton } from "./Skeleton";

import s from "./Post.module.scss";
import { useDispatch } from "react-redux";
import { fetchRemovePost } from "../../store/slices/posts";

export const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  const dispatch = useDispatch();
  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {
    if (window.confirm("Вы действительно хотите удалить")) {
      dispatch(fetchRemovePost(id));
    }
  };

  return (
    <div className={clsx(s.root, { [s.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={s.editButtons}>
          <Link to={`/posts/${id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(s.image, { [s.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={s.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={s.indention}>
          <h2 className={clsx(s.title, { [s.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${id}`}>{title}</Link>}
          </h2>
          <ul className={s.tags}>
            {tags.map((name) => (
              <li key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>
          {children && <div className={s.content}>{children}</div>}
          <ul className={s.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
