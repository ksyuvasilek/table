import React, {FC, useEffect, useState} from 'react';
import axios from 'axios';
import TableRows from './TableRows';
import { IPost } from './types/types';
import ReactToExcel from 'react-html-table-to-excel';

const TablePage: FC = () => {
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
        <div>
            <table id="table-to-excel">
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
            <ReactToExcel
                table="table-to-excel"
                filename="Posts"
                sheet="sheet 1"
                buttonText="EXPORT"
            />
        </div>
    )
}

export default TablePage