import React, { FC, useState } from 'react';
import { Button, Grid, Stack, TextField } from '@mui/material';
import Item from '../components/Item';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import useRecepient from '../hooks/recepientHook';
import axios from 'axios';

interface ComponentProps { }

const CreateTranscriptForm: FC<ComponentProps> = () => {
  const [transcript, setTranscript] = useState<string>('');
  
  const [externalSubject, setExternalSubject] = useState<string>('');
  const [externalSenderName, setExternalSenderName] = useState<string>('');
  const [externalSenderEmail, setExternalSenderEmail] = useState<string>('');

  const [tripSubject, setTripSubject] = useState<string>('');
  const [tripSenderName, setTripSenderName] = useState<string>('');
  const [tripSenderEmail, setTripSenderEmail] = useState<string>('');

  const [
    externalRecepients,
    handleAddExternalRecepient,
    handleRemoveExternalRecepient,
    handleChangeExternalRecepientName,
    handleChangeExternalRecepientEmail
  ] = useRecepient()

  const [
    tripRecepients,
    handleAddTripRecepient,
    handleRemoveTripRecepient,
    handleChangeTripRecepientName,
    handleChangeTripRecepientEmail
  ] = useRecepient()

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleSend = () => {
    console.log('Transcript:', transcript);
    console.log('External Recepients:', externalRecepients);
    console.log('Trip Recepients:', tripRecepients);
    axios.post('http://localhost:3001/transcripts', {
      call_transcript: transcript,
      external_email_data: {
        subject: externalSubject,
        sender: {
          name: externalSenderName,
          email: externalSenderEmail
        },
        recepients: externalRecepients
      },
      trip_report_email_data: {
        subject: tripSubject,
        sender: {
          name: tripSenderName,
          email: tripSenderEmail
        },
        recepients: tripRecepients
      }
    }).then((response) => {
      console.log('Response:', response);
    });
  };

  return (
    <Stack spacing={2}>
      <Item>
        <h1>Create Transcript</h1>
      </Item>
      <Item>
        <Button variant="contained" onClick={handleClick}>
          Back
        </Button>
      </Item>
      <Item>
        <TextField
          id="filled-multiline-transcript"
          label="Transcript"
          multiline
          maxRows={24}
          fullWidth
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
      </Item>
      <Item>
        <h2>External Email</h2>
      </Item>
      <Item>
        <TextField
          label="Subject"
          fullWidth
          value={externalSubject}
          onChange={(e) => setExternalSubject(e.target.value)}
        />
      </Item>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Sender Name"
              fullWidth
              value={externalSenderName}
              onChange={(e) => setExternalSenderName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Sender Email"
              fullWidth
              value={externalSenderEmail}
              onChange={(e) => setExternalSenderEmail(e.target.value)}
            />
          </Grid>
        </Grid>
      </Item>
      <Item>
        <h3>Recepient</h3>
      </Item>
      {externalRecepients.map((recepient, index) => (
        <Item key={index}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TextField
                label="Name"
                value={recepient.name}
                onChange={(e) => handleChangeExternalRecepientName(e.target.value, index)}
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Email"
                value={recepient.email}
                onChange={(e) => handleChangeExternalRecepientEmail(e.target.value, index)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2} alignContent="center">
              <Button variant="text" startIcon={<DeleteIcon />} onClick={() => handleRemoveExternalRecepient(index)}>
                Remove
              </Button>
            </Grid>
          </Grid>
        </Item>
      ))}
      <Item>
        <Button variant="text" startIcon={<AddIcon />} onClick={handleAddExternalRecepient}>
          Add recepient
        </Button>
      </Item>

      <Item>
        <h2>Trip Email</h2>
      </Item>
      <Item>
        <TextField
          label="Subject"
          fullWidth
          onChange={(e) => setTripSubject(e.target.value)}
          value={tripSubject}
        />
      </Item>
      <Item>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Sender Name"
              fullWidth
              value={tripSenderName}
              onChange={(e) => setTripSenderName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Sender Email"
              fullWidth
              value={tripSenderEmail}
              onChange={(e) => setTripSenderEmail(e.target.value)}
            />
          </Grid>
        </Grid>
      </Item>
      <Item>
        <h3>Recepient</h3>
      </Item>
      {tripRecepients.map((recepient, index) => (
        <Item key={index}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TextField
                label="Name"
                value={recepient.name}
                onChange={(e) => handleChangeTripRecepientName(e.target.value, index)}
                fullWidth
              />
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Email"
                value={recepient.email}
                onChange={(e) => handleChangeTripRecepientEmail(e.target.value, index)}
                fullWidth
              />
            </Grid>
            <Grid item xs={2} alignContent="center">
              <Button variant="text" startIcon={<DeleteIcon />} onClick={() => handleRemoveTripRecepient(index)}>
                Remove
              </Button>
            </Grid>
          </Grid>
        </Item>
      ))}
      <Item>
        <Button variant="text" startIcon={<AddIcon />} onClick={handleAddTripRecepient}>
          Add recepient
        </Button>
      </Item>
      <Item>
        <Button variant="contained" onClick={handleSend} startIcon={<SendIcon />}>
          Send
        </Button>
      </Item>
    </Stack>
  );
};

export default CreateTranscriptForm;