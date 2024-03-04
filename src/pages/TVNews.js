import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import React, { useState, useEffect } from 'react';
import { Image, Button, Table, Typography, Modal } from 'antd';
import { listTVNews } from "../graphql/queries";
import {
    createTVNews as createTVNewsMutation,
    deleteTVNews as deleteTVNewsMutation,
} from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
    Flex,
    Text,
    TextField,
    View,
    DropZone,
    Button as AmplifyButton
} from "@aws-amplify/ui-react";
const client = generateClient();

const Index = () => {
    const [data, setData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [files, setFiles] = React.useState([]);

    const columns = [
        {
            title: 'image',
            dataIndex: 'image',
            width: '25%',
            editable: false,
            render: (_, record) => {
                console.log(record)
                return <Image
                    width={50}
                    src={record.image}
                    preview={{
                        src: record.image,
                      }}
                />
            },
        },
        {
            title: 'title',
            dataIndex: 'title',
            width: '15%',
            editable: true,
        },
        {
            title: 'detail',
            dataIndex: 'detail',
            width: '40%',
            editable: true,
        },
        {
            title: 'publishInfo',
            dataIndex: 'publishInfo',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_, record) => {
                return (
                    <span>
                        <Typography.Link
                            onClick={() => deleteTVNewsItem(record)}
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
        fetchAllTVNews();
    }, [])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
      };
    async function createTVNewsItem(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        console.log(files)
        const data = {
            title: form.get("title"),
            detail: form.get("detail"),
            publishInfo: form.get("publishInfo"),
            image: files[0],
        };
        console.log(data)
        if (!!data.image) {
            const result = await uploadData({
                key: form.get("title"),
                data: files[0]
            }).result;
            console.log('Succeeded: ', result);
        };
        await client.graphql({
            query: createTVNewsMutation,
            variables: { input: data },
        });
        fetchAllTVNews();
        setIsModalOpen(false);
        event.target.reset();
    }
    async function deleteTVNewsItem({ id, title }) {
        const newNotes = data.filter((note) => note.id !== id);
        setData(newNotes);
        await remove({ key: title });
        await client.graphql({
            query: deleteTVNewsMutation,
            variables: { input: { id } },
        });
    }
    async function fetchAllTVNews() {
        const apiData = await client.graphql({ query: listTVNews });
        const dataListFromAPI = apiData.data.listTVNews.items;
        await Promise.all(
            dataListFromAPI.map(async (note) => {
                console.log(note)
                if (note.image) {
                    const getUrlResult = await getUrl({ key: note.title });
                    console.log(getUrlResult)
                    note.image = getUrlResult.url;
                }
                return note;
            })
        );
        setData(dataListFromAPI);
    }
    return (
        <div>
            <Button
                onClick={showModal}
                type="primary"
                style={{
                    marginBottom: 16,
                }}
            >
                Add a TV news
            </Button>
            <Table
            rowKey={record=>record.id}

                bordered
                dataSource={data}
                columns={columns}
            />
            <Modal title="Create a piece of TV news" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <View as="form" margin="3rem 0" onSubmit={createTVNewsItem}>
                    <Flex direction="column" justifyContent="center">
                        <DropZone
                            onDropComplete={({ acceptedFiles, rejectedFiles }) => {
                                setFiles(acceptedFiles);
                            }}
                        >
                            Drag images here
                        </DropZone>
                        {files.map((file) => (
                            <Text key={file.name}>{file.name}</Text>
                        ))}
                        <TextField
                            name="title"
                            placeholder="TVNews title"
                            label="TVNews title"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />
                        <TextField
                            name="detail"
                            placeholder="TVNews detail"
                            label="TVNews detail"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />
                        <TextField
                            name="publishInfo"
                            placeholder="TVNews publishInfo"
                            label="TVNews publishInfo"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />

                        <AmplifyButton type="submit" variation="primary">
                            Create TVNews
                        </AmplifyButton>
                    </Flex>
                </View>
            </Modal>

        </div>
    );
};

export default Index;