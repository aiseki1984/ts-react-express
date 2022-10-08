import moment from 'moment';
import React, { useContext } from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';

import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

const post = {
  id: 1,
  username: 'nekoneko',
  date: '2022-01-02',
  cat: 'puyopuyo',
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!<h1>Hello World!</h1>',
  userImg:
    'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
};
const currentUser = {
  username: 'nekoneko',
};

const Single = () => {
  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className='single'>
      <div className='content'>
        <img src={`${post?.img}`} alt='' />
        <div className='user'>
          {post.userImg && <img src={post.userImg} alt='' />}
          <div className='info'>
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (
            <div className='edit'>
              <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt='' />
              </Link>
              <img onClick={handleDelete} src={Delete} alt='' />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></div>{' '}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
