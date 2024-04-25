import { useState } from 'react';

interface Recepient {
  name: string;
  email: string;
}

type AddRecepient = () => void;
type RemoveRecepient = (index: number) => void;
type ChangeRecepientName = (value: string, index: number) => void;
type ChangeRecepientEmail = (value: string, index: number) => void;

type UseRecepient = [
  Recepient[],
  AddRecepient,
  RemoveRecepient,
  ChangeRecepientName,
  ChangeRecepientEmail
];

const useRecepient: () => UseRecepient = () => {
  const [recepients, setRecepients] = useState<Recepient[]>([]);

  const handleAddRecepient: AddRecepient = () => {
    setRecepients([...recepients, { name: '', email: '' }]);
  };

  const handleRemoveRecepient: RemoveRecepient = (index: number) => {
    const updatedRecepients = [...recepients];
    updatedRecepients.splice(index, 1);
    setRecepients(updatedRecepients);
  };

  const handleChangeRecepientName: ChangeRecepientName = (value: string, index: number) => {
    const updatedRecepients = [...recepients];
    updatedRecepients[index].name = value;
    setRecepients(updatedRecepients);
  };

  const handleChangeRecepientEmail: ChangeRecepientEmail = (value: string, index: number) => {
    const updatedRecepients = [...recepients];
    updatedRecepients[index].email = value;
    setRecepients(updatedRecepients);
  };

  return [
    recepients,
    handleAddRecepient,
    handleRemoveRecepient,
    handleChangeRecepientName,
    handleChangeRecepientEmail
  ];
};

export default useRecepient;