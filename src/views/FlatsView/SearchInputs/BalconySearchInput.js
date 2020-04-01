import React from 'react';
import { balconyCheckboxes } from '../../../components/Checkboxes/CheckboxesData';
import Checkbox from '../../../components/Checkboxes/Checkbox';
import styles from './Checkboxes.module.scss';

class BalconyCheckboxContainer extends React.Component {
  state = {
      checkedBalconyItems: new Map(),
    }

  handleChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedBalconyItems: prevState.checkedBalconyItems.set(item, isChecked)}));
    this.props.onCheckBoxChange();
    console.log(this.state);
  }

  render(props) {
    return (
      <div className={styles.checkboxesWrapper} >
      {
        balconyCheckboxes.map(item => (
          <label className={styles.checkboxLabel} key={item.key}>
            {item.name}
            <Checkbox className={styles.checkbox} name={item.name} checked={this.state.checkedBalconyItems.get(item.name)} onChange={this.handleChange} />
          </label>
        ))
      }
      </div>
    );
  }
}

export default BalconyCheckboxContainer;