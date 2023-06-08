'use client'

import { Comment } from 'react-loader-spinner'

export function CommentSpiner () {
  return (
    <Comment
      visible
      height='80'
      width='80'
      ariaLabel='comment-loading'
      wrapperStyle={{}}
      wrapperClass='comment-wrapper'
      color='#fff'
      backgroundColor='#F4442E'
    />
  )
}
