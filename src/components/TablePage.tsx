import React, {useEffect, useState} from 'react';
import axios from 'axios';
import TableRows from './TableRows';
import { IPost } from './types/types';

const TablePage = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts()
    })

    async function getPosts() {
        try {
          const response = await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
          setPosts(response.data)
        } catch (e) {
          alert(e)
        }
      }

    return (
        <table>
            <thead>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
            </thead>
            <TableRows posts={posts}/>
        </table>
    )
}

export default TablePage