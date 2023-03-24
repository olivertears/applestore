import { FC } from 'react';
import { Button, Form, Input, PageWrap } from '../../ui';
import { useForm } from 'react-hook-form';
import { api } from '../../../api/api';
import axios from 'axios';

export const Menu: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<{ file?: File[] }>({
    defaultValues: { file: [] }
  });

  const onSubmit = (data: { file?: File[] }) => {
    if (data.file) {
      console.log(data.file[0]);
      const formData = new FormData();
      formData.append('file', data.file[0]);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      return axios.post('http://localhost:8081/aws', formData, config);
    }
  };

  return (
    <PageWrap>
      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <Input type="file" label="Image" value={' '} {...register('file', { required: true })} />
        <Button type="submit">SAVE</Button>
      </Form>
    </PageWrap>
  );
};
