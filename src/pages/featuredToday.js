import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import React, { useState, useEffect } from 'react';
import { Image, Button, Table, Typography, Modal } from 'antd';
import { listFeaturedTodays } from "../graphql/queries";
import {
    createFeaturedToday as createFeaturedTodaysMutation,
    deleteFeaturedToday as deleteFeaturedTodaysMutation,
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
            title: 'backgroundImage',
            dataIndex: 'backgroundImage',
            width: '25%',
            editable: false,
            render: (_, record) => {
                console.log(record)
                return <Image
                    width={50}
                    src={record.backgroundImage}
                    preview={{
                        src: record.backgroundImage,
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
            title: 'people',
            dataIndex: 'people',
            width: '40%',
            editable: true,
        },
        {
            title: 'photographerInfo',
            dataIndex: 'photographerInfo',
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
                            onClick={() => deleteFeaturedTodaysItem(record)}
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
        fetchAllFeaturedTodays();
    }, [])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
      };
    async function createFeaturedTodaysItem(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        console.log(files)
        const data = {
            title: form.get("title"),
            people: form.get("people"),
            photographerInfo: form.get("photographerInfo"),
            backgroundImage: files[0],
        };
        console.log(data)
        if (!!data.backgroundImage) {
            const result = await uploadData({
                key: form.get("title"),
                data: files[0]
            }).result;
            console.log('Succeeded: ', result);
        };
        await client.graphql({
            query: createFeaturedTodaysMutation,
            variables: { input: data },
        });
        fetchAllFeaturedTodays();
        setIsModalOpen(false);
        event.target.reset();
    }
    async function deleteFeaturedTodaysItem({ id, title }) {
        const newNotes = data.filter((note) => note.id !== id);
        setData(newNotes);
        await remove({ key: title });
        await client.graphql({
            query: deleteFeaturedTodaysMutation,
            variables: { input: { id } },
        });
    }
    async function fetchAllFeaturedTodays() {
        const apiData = await client.graphql({ query: listFeaturedTodays });
        const dataListFromAPI = apiData.data.listFeaturedTodays.items;
        await Promise.all(
            dataListFromAPI.map(async (note) => {
                console.log(note)
                if (note.backgroundImage) {
                    const getUrlResult = await getUrl({ key: note.title });
                    console.log(getUrlResult)
                    note.backgroundImage = getUrlResult.url;
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
                Add a top news
            </Button>
            <Table
            rowKey={record=>record.id}

                bordered
                dataSource={data}
                columns={columns}
            />
            <Modal title="Create a piece of top news" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <View as="form" margin="3rem 0" onSubmit={createFeaturedTodaysItem}>
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
                            placeholder="FeaturedTodays title"
                            label="FeaturedTodays title"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />
                        <TextField
                            name="people"
                            placeholder="FeaturedTodays people"
                            label="FeaturedTodays people"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />
                        <TextField
                            name="photographerInfo"
                            placeholder="FeaturedTodays photographerInfo"
                            label="FeaturedTodays photographerInfo"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />

                        <AmplifyButton type="submit" variation="primary">
                            Create FeaturedTodays
                        </AmplifyButton>
                    </Flex>
                </View>
            </Modal>

        </div>
    );
};

export default Index;