import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import s from './Header.module.scss';

export const Header = () => {
  const isAuth = true;

  const onClickLogout = () => {};

  return (
    <div className={s.root}>
      <Container maxWidth="lg">
        <div className={s.inner}>
          <Link className={s.logo} to="/">
            <div>MITYASH BLOG</div>
          </Link>
          <div className={s.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained">Написать статью</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
