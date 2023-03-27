import { FC, useState } from 'react';
import { Loader, Button, Form, Input, PageWrap } from '../../ui';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export const Menu: FC = () => {
  const [fileName, setFileName] = useState('');
  const [image, setImage] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<{ file?: File[] }>({
    defaultValues: { file: [] }
  });

  const onSubmit = async (data: { file?: File[] }) => {
    if (data.file) {
      console.log(data.file[0]);
      const formData = new FormData();
      formData.append('file', data.file[0]);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      const fn = await axios.post('http://localhost:8081/aws', formData, config);
      console.log(fn.data);
      // @ts-ignore
      setFileName(fn.data);
    }
  };

  const get = () => {
    setImage(fileName);
  };

  return (
    <PageWrap>
      <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <Input type="file" label="Image" value={' '} {...register('file', { required: true })} />
        <Button type="submit">SAVE</Button>
      </Form>
      <Button onClick={get}>GET</Button>
      <img src={'http://localhost:8081/aws/img.jfif' + image}></img>
      {/*<img src={`/test-backet-ilya/YCNE-vwuDtHSwRIr6FwQtd47UQKVzm_8sIqCu5aR`} />*/}
    </PageWrap>
  );
};
