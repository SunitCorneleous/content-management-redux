import { useForm } from 'react-hook-form';

const CreatePost = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className='py-10'>
      <h1 className='text-center text-2xl'>Create Post</h1>

      {/* form */}

      <form className='flex flex-col py-5' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title' className='mb-2'>
          Title of post
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          {...register('title', { required: true })}
          id='title'
          type='text'
          className='border border-black rounded-md p-2'
        />

        <label htmlFor='content' className='mt-5 mb-2'>
          Post content
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <textarea
          {...register('content', { required: true })}
          id='content'
          rows={20}
          type='text'
          className='border border-black rounded-md p-2'
        />

        <button className='bg-black text-white p-3 mt-6 rounded-md w-1/3 mx-auto'>
          Add post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
