import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>G12 Sport Club</h2>
        <h3>O site G12 Sport Club está atualmente em desenvolvimento e, em breve, estará disponível para oferecer uma experiência completa aos nossos usuários. Estamos trabalhando para trazer uma plataforma moderna, funcional e de fácil acesso, onde você poderá conhecer nossos serviços, eventos e novidades. Agradecemos sua paciência e, em breve, teremos novidades! Fique atento para o lançamento.</h3>
      </main>
      <footer className={styles.footer}>
        <h4>O desenvolvimento do site G12 Sport Club está sendo realizado em parceria com a empresa de tecnologia e automação Zior.</h4>
      </footer>
    </div>
  );
}
