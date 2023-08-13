import {MyInput} from "@/components/UI/MyInput";
import {Button} from "@/components/UI/Button";
import styles from './myForm.module.css'

export const MyForm = () => {
    return (
        <>
            {/*<MyInput label={'Имя'} name={'name'} idInputBlock={'floatingName'} type={'text'} required={true}/>*/}
            {/*<MyInput label={'Телефон'} name={'phone'} idInputBlock={'floatingPhone'} type={'tel'} required={true}/>*/}
            {/*<MyInput label={'Ваш сайт'} name={'site'} idInputBlock={'floatingSite'} type={'text'}/>*/}
            <Button title={'Получить предложение и книгу'} textStyles={styles.button}/>
            <p className={styles.text}>Нажимая кнопку «Получить предложение», вы соглашаетесь с
                <span className={styles.text_color}> политикой&nbsp;конфиденциальности</span>
            </p>
        </>
    )
}