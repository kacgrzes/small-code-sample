import config from 'config.json';
import uuid from 'uuid';

export const CREATE_POST = Symbol('@@table/CREATE_POST');

export function createPost(title) {
  return {
    type: CREATE_POST,
    id: uuid.v4(),
    post_title: title,
    user_name: config.activeUser,
    views: 0,
    likes: 0,
    created_at: parseInt(Date.now() / 1000, 10),
  };
}
