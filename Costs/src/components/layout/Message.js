import { useState, useEffect } from 'react'
 
import styles from './Message.module.css'

function Message( {type, msg} ) {

    const [visible, setVisible] = useState(false) /* Começa a constante em false para ela não aparecer de imediato */

    useEffect(() => { /* useEffect será usado exatamente para criar a condição e fazer aparecer a mensagem por 3s */

        if(!msg) { /* Ele não vai aparecer nada e retorar vazio */
            setVisible(false)
            return
        }

        setVisible(true) /* Se a mensagem existir a condição vira true e mostra ela */

        const timer = setTimeout(() => { /* Inicio */
            setVisible(false) /* A depois da imagem aparecer ela ficara visivel por cerca de 3s*/
        }, 3000)

        return () => clearTimeout(timer) /* retorna para ter um fim no timer */

    }, [msg])


    return (
        <>
        {visible && ( /* Cria uma condição no elemento pai para o mensagem aparecer se o visible for verdadeiro */
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
        )}
        </>
    )
}

export default Message