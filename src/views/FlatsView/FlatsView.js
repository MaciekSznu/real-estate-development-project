import React from "react";
import styles from "./FlatsView.module.scss";
import BalconySearchWrapper from "../FlatsView/SearchInputs/BalconySearchWrapper";
import StatusSearchWrapper from "../FlatsView/SearchInputs/StatusSearchWrapper";
import RangeSearchInputs from "../FlatsView/SearchInputs/RangeSearchInputs";

const FlatsView = () => (
  <div className={styles.flatsViewWrapper}>
    <h1 className={styles.sectionTitle}>Mieszkania</h1>
    <h2 className={styles.sectionTitle}>Znajdź swoje wymarzone mieszkanie</h2>
    <div className={styles.flatSearchWrapper}>
      <RangeSearchInputs />
      <BalconySearchWrapper />
      <StatusSearchWrapper />
    </div>
    <p className={styles.sectionParagraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ullamcorper vel nibh quis finibus. Donec eu tincidunt ante, auctor porta nulla. Integer semper congue lacus non egestas. Curabitur mollis, lorem in convallis dapibus, enim enim fermentum tortor, et hendrerit risus urna nec metus. Aenean lobortis malesuada tortor. Donec egestas finibus varius. Nulla luctus facilisis malesuada. Suspendisse et ex est.</p>
  </div>
);

export default FlatsView;