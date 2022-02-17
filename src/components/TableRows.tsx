import React, { FC } from 'react'
import { IPosts, IPost } from './types/types'

const TableRows: FC<IPosts>= ({posts}) => {
    return (
        <tbody>
            {posts.map((post) => {
                return (
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
            )})}
        </tbody>
    )
}

export default TableRows