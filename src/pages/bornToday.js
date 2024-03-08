import { uploadData, getUrl, remove } from 'aws-amplify/storage';
import React, { useState, useEffect } from 'react';
import { Image, Button, Table, Typography, Modal } from 'antd';
import { listBornTodays } from "../graphql/queries";
import {
    createBornToday as createBornTodayMutation,
    deleteBornToday as deleteBornTodayMutation,
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
            title: 'avatarImage',
            dataIndex: 'avatarImage',
            width: '25%',
            editable: false,
            render: (_, record) => {
                console.log(record)
                return <Image
                    width={50}
                    src={record.avatarImage}
                    preview={{
                        src: record.avatarImage,
                      }}
                />
            },
        },
        {
            title: 'name',
            dataIndex: 'name',
            width: '15%',
            editable: true,
        },
        {
            title: 'age',
            dataIndex: 'age',
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
                            onClick={() => deleteBornTodayItem(record)}
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
        fetchAllBornToday();
    }, [])
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
      };
    async function createBornTodayItem(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        console.log(files)
        const data = {
            name: form.get("name"),
            age: form.get("age"),
            avatarImage: files[0],
        };
        console.log(data)
        if (!!data.avatarImage) {
            const result = await uploadData({
                key: form.get("name"),
                data: files[0]
            }).result;
            console.log('Succeeded: ', result);
        };
        await client.graphql({
            query: createBornTodayMutation,
            variables: { input: data },
        });
        fetchAllBornToday();
        setIsModalOpen(false);
        event.target.reset();
    }
    async function deleteBornTodayItem({ id, name }) {
        const newNotes = data.filter((note) => note.id !== id);
        setData(newNotes);
        await remove({ key: name });
        await client.graphql({
            query: deleteBornTodayMutation,
            variables: { input: { id } },
        });
    }
    async function fetchAllBornToday() {
        const apiData = await client.graphql({ query: listBornTodays });
        const dataListFromAPI = apiData.data.listBornTodays.items;
        await Promise.all(
            dataListFromAPI.map(async (note) => {
                console.log(note)
                if (note.avatarImage) {
                    const getUrlResult = await getUrl({ key: note.name });
                    console.log(getUrlResult)
                    note.avatarImage = getUrlResult.url;
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
                Add a star
            </Button>
            <Table
            rowKey={record=>record.id}

                bordered
                dataSource={data}
                columns={columns}
            />
            <Modal title="Create a piece of top news" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <View as="form" margin="3rem 0" onSubmit={createBornTodayItem}>
                    <Flex direction="column" justifyContent="center">
                        <DropZone
                            onDropComplete={({ acceptedFiles, rejectedFiles }) => {
                                setFiles(acceptedFiles);
                            }}
                        >
                            Drag avatarImages here
                        </DropZone>
                        {files.map((file) => (
                            <Text key={file.name}>{file.name}</Text>
                        ))}
                        <TextField
                            name="name"
                            placeholder="BornToday name"
                            label="BornToday name"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />
                        <TextField
                            name="age"
                            placeholder="BornToday age"
                            label="BornToday age"
                            variation="quiet"
                            labelHidden={true}
                            required
                        />

                        <AmplifyButton type="submit" variation="primary">
                            Create BornToday
                        </AmplifyButton>
                    </Flex>
                </View>
            </Modal>

        </div>
    );
};

export default Index;