import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='border'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
                <input type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
                <input type="text" placeholder="Subject" {...register("Subject", { required: true, maxLength: 100 })} />
                <input type="text" placeholder="Message" {...register("Message", { required: true, maxLength: 100 })} />

                <input type="submit" />
            </form>
        </div>
    );
}

export default Form;