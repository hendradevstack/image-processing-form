import React, { FC, useState } from 'react'
import Item from '../components/Item';
import { Stack, TextField, Button } from '@mui/material';
import axios from 'axios';

interface ComponentProps {

}

const AZURE_AI_ENDPOINT = 'https://azure-ai-api.azurewebsites.net/api/analyze-image';
const tokenBearer = '';

const Home: FC<ComponentProps> = () => {
  const [imageURL, setImageURL] = useState('');
  const [description, setDescription] = useState('');
  const [response, setResponse] = useState();

  const handleSubmit = () => {
    console.log('Image URL:', imageURL);
    console.log('Description:', description);
    axios.post(AZURE_AI_ENDPOINT, {
      input_image: imageURL,
      Description: description
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenBearer}`
      }
    })
      .then((resp) => {
        setResponse(resp.data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Stack spacing={2}>
      <Item>
        <TextField
          id="filled-multiline-image"
          label="Image URL"
          multiline
          maxRows={24}
          fullWidth
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </Item>
      <Item>
        <TextField
          id="filled-multiline-description"
          label="Description"
          multiline
          maxRows={24}
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Item>
      <Item>
      <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Item>
      <Item>
        <pre>
          {JSON.stringify(response, null, 2)}
        </pre>
      </Item>
    </Stack>
  )
}

export default Home