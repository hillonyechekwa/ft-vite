import Styles from '../styles/modal.module.scss'

const Modal = ({children, show, handleClose}) => {

    const showHideClassName = show ? Styles.showModal : Styles.hideModal;
    return (
        <section className={showHideClassName}>
            <main className={Styles.modalWrapper}>
                <button className={Styles.closeBtn} onClick={handleClose}>
                    close
                </button>
            {children}
            </main>
        </section>
    )
}

export default Modal