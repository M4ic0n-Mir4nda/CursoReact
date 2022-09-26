import styles from './Container.module.css'

// ${styles[props.customClass]} > A classe que vai vir das propiedades porem é opcional pode ou não ser usado

function Container(props) {
    return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>

}

export default Container