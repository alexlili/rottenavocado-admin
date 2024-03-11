import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import React, { useState, useEffect } from 'react';
import { Image, Button, Table, Typography, Modal } from 'antd';
import { listMovieRatings } from "../graphql/queries";
import {
    createMovieRating as createMovieRatingMutation,
    deleteMovieRating as deleteMovieRatingMutation,
} from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

const Index = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [files, setFiles] = React.useState([]);

    const columns = [
        {
            title: 'movieId',
            dataIndex: 'movieId',
            width: '40s%',
            editable: true,
        },
        {
            title: 'userId',
            dataIndex: 'userId',
            width: '40%',
            editable: true,
        },
        {
            title: 'rate',
            dataIndex: 'rate',
            width: '10%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                return (
                    <span>
                        <Typography.Link
                            onClick={() => deleteMovieRatingItem(record)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Delete
                        </Typography.Link>
                    </span>
                );
            },
        },
    ];

    useEffect(() => {
        fetchAllMovieRating();
    }, [])
    async function deleteMovieRatingItem({ id }) {
        const newNotes = data.filter((note) => note.id !== id);
        setData(newNotes);
        // await remove({ key: name });
        await client.graphql({
            query: deleteMovieRatingMutation,
            variables: { input: { id } },
        });
    }
    async function fetchAllMovieRating() {
        const apiData = await client.graphql({ query: listMovieRatings });
        const dataListFromAPI = apiData.data.listMovieRatings.items;
        setData(dataListFromAPI);
    }
    return (
        <div>
            <Table
            rowKey={record=>record.id}

                bordered
                dataSource={data}
                columns={columns}
            />
        </div>
    );
};

export default Index;