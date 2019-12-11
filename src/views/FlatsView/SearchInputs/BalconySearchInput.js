import React from 'react';
import { balconyCheckboxes } from '../../../components/Checkboxes/CheckboxesData';
import Checkbox from '../../../components/Checkboxes/Checkbox';
import styles from './Checkboxes.module.scss';

class BalconyCheckboxContainer extends React.Component {
  state = {
      checkedItems: new Map(),
    }

  handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)}));
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.checkboxesWrapper} >
        {
          balconyCheckboxes.map(item => (
            <label className={styles.checkboxLabel} key={item.key}>
              {item.name}
              <Checkbox className={styles.checkbox} name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
            </label>
          ))
        }
        </div>
      </React.Fragment>
    );
  }
}

export default BalconyCheckboxContainer;