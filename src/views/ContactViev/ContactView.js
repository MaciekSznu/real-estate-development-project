import React from "react";
import styles from "./ContactView.module.scss";

const ContactView = () => (
  <div className={styles.contactViewWrapper} id='kontakt'>
    <h1 className={styles.sectionTitle}>Kontakt</h1>
    <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
  </div>
);

export default ContactView;