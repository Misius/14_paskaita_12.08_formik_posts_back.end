import { useFormik } from "formik";
import * as Yup from 'yup';
export default function AddPostForm(props) {
    const formik = useFormik({
        initialValues: {
            image: '',
            title: '',
            body: '',
            reactions: 0,
            userId: 1,
        },
        validationSchema: Yup.object().shape({
            image: Yup.string().trim().min(5, 'Nemažiau nei 5 simboliai').max(120).required('Privalomas laukas'),
            title: Yup.string().min(4, 'Nemažiau nei 4 simboliai').max(20).required('Privalomas laukas'),
            body: Yup.string().min(10, 'Nemažiau nei 10 simbolių').required('Privalomas laukas'),
            reactions: Yup.number().positive('Privalomas teigiamas skaičius').integer('Privalomas sveikas skaičius').max(15, 'Nedaugiau nei 15').required('Privalomas laukas'),
            userId:  Yup.number().positive().min(1).max(5).required('Privalomas laukas'),
        }),
        onSubmit: (values) => {
            console.log('values ===', values);
        }
    });
    // rekalingi input
    // image  text
    // title  text
    // body  textarea
    // reactions number 0
    // userId
    // console.log('formik.values ===', formik.values);
    // console.log('formik.errors ===', formik.errors);
    console.log('formik.touched ===', formik.touched);
    return (
        <div>
            <h2>Create post</h2>

            <form className="card" onSubmit={formik.handleSubmit}>
                <input 
                    className={formik.touched.image && formik.errors.image ? 'inputErrorField' : ''} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.image} 
                    type="text" 
                    placeholder="Image" 
                    name="image"/>
                {formik.touched.image && formik.errors.image && (
                <p className='inputErrorMsg'>{formik.errors.image}</p>
                )}

                <input 
                    className={formik.touched.title && formik.errors.title ? 'inputErrorField' : ''}  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.title} 
                    type="text" 
                    placeholder="Title" 
                    name="title"/>
                {formik.touched.title && formik.errors.title && (
                <p className='inputErrorMsg'>{formik.errors.title}</p>
                )}

                <textarea 
                    className={formik.touched.body && formik.errors.body ? 'inputErrorField' : ''}  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.body} 
                    name="body" 
                    placeholder="Yout text"></textarea>
                {formik.touched.body && formik.errors.body && (
                <p className='inputErrorMsg'>{formik.errors.body}</p>
                )}

                <input 
                    className={formik.touched.reactions && formik.errors.reactions? 'inputErrorField' : ''}  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.reactions} 
                    type="text"  
                    name="reactions"  
                    placeholder="Reactions" />
                {formik.touched.reactions && formik.errors.reactions && (
                <p className='inputErrorMsg'>{formik.errors.reactions}</p>
                )}

                <input 
                    className={formik.touched.userId && formik.errors.userId ? 'inputErrorField' : ''}  
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    value={formik.values.userId} 
                    type="number"  
                    name="userId" 
                    // value={1} 
                    disabled />
                {formik.touched.userId && formik.errors.userId && (
                <p className='inputErrorMsg'>{formik.errors.userId}</p>
                )}

                <button type="submit">Create</button>
            </form>
        </div>
    )
}