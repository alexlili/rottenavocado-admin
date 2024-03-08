import { uploadData, getUrl, remove } from "aws-amplify/storage";
import React, { useState, useEffect } from "react";
import { Image, Button, Table, Typography, Modal } from "antd";
import { listMovies } from "../graphql/queries";
import {
  createMovie as createMovieMutation,
  deleteMovie as deleteMovieMutation,
} from "../graphql/mutations";
import { generateClient } from "aws-amplify/api";
import {
  Flex,
  Text,
  TextField,
  View,
  DropZone,
  Button as AmplifyButton,
} from "@aws-amplify/ui-react";
const client = generateClient();

const Index = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [files, setFiles] = React.useState([]);

  const columns = [
    {
      title: "imageList",
      dataIndex: "imageList",
      width: "25%",
      editable: false,
      render: (_, record) => {
        console.log(record);
        return (
          <Image
            width={50}
            src={record.imageList}
            preview={{
              src: record.imageList,
            }}
          />
        );
      },
    },
    {
      title: "name",
      dataIndex: "name",
      width: "15%",
      editable: true,
    },
    {
      title: "director",
      dataIndex: "director",
      width: "40%",
      editable: true,
    },
    {
      title: "introduction",
      dataIndex: "introduction",
      width: "40%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        return (
          <span>
            <Typography.Link
              onClick={() => deleteMoviesItem(record)}
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
    fetchAllMovies();
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  async function createMoviesItem(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    console.log(files);
    const data = {
      name: form.get("name"),
      actor: form.get("actor"),
      director: form.get("director"),
      year: form.get("year"),
      introduction: form.get("introduction"),
      imageList: files[0],
    };
    console.log(data);
    if (!!data.imageList) {
      const result = await uploadData({
        key: form.get("name")+form.get("year"),
        data: files[0],
      }).result;
      console.log("Succeeded: ", result);
    }
    await client.graphql({
      query: createMovieMutation,
      variables: { input: data },
    });
    fetchAllMovies();
    setIsModalOpen(false);
    event.target.reset();
  }
  async function deleteMoviesItem({ id, name }) {
    const newNotes = data.filter((note) => note.id !== id);
    setData(newNotes);
    await remove({ key: name });
    await client.graphql({
      query: deleteMovieMutation,
      variables: { input: { id } },
    });
  }
  async function fetchAllMovies() {
    const apiData = await client.graphql({ query: listMovies });
    const dataListFromAPI = apiData.data.listMovies.items;
    await Promise.all(
      dataListFromAPI.map(async (note) => {
        console.log(note);
        if (note.imageList) {
          const getUrlResult = await getUrl({ key: note.name+note.year });
          console.log(getUrlResult);
          note.imageList = getUrlResult.url;
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
        Add a movie
      </Button>
      <Table
        rowKey={(record) => record.id}
        bordered
        dataSource={data}
        columns={columns}
      />
      <Modal
        title="Create a piece of top news"
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <View as="form" margin="3rem 0" onSubmit={createMoviesItem}>
          <Flex direction="column" justifyContent="center">
            <DropZone
              onDropComplete={({ acceptedFiles, rejectedFiles }) => {
                setFiles(acceptedFiles);
              }}
            >
              Drag image here
            </DropZone>
            {files.map((file) => (
              <Text key={file.name}>{file.name}</Text>
            ))}
            <TextField
              name="name"
              placeholder="Movie name"
              label="Movie name"
              variation="quiet"
              labelHidden={true}
              required
            />
            <TextField
              name="director"
              placeholder="Movie director"
              label="Movie director"
              variation="quiet"
              labelHidden={true}
              required
            />
            <TextField
              name="actor"
              placeholder="Movie actor"
              label="Movie actor"
              variation="quiet"
              labelHidden={true}
              required
            />
            <TextField
              name="year"
              placeholder="Movie year"
              label="Movie year"
              variation="quiet"
              labelHidden={true}
              required
            />
            <TextField
              name="introduction"
              placeholder="Movie introduction"
              label="Movie introduction"
              variation="quiet"
              labelHidden={true}
              required
            />

            <AmplifyButton type="submit" variation="primary">
              Create Movie
            </AmplifyButton>
          </Flex>
        </View>
      </Modal>
    </div>
  );
};

export default Index;
