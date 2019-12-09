import React from 'react';
// import PropTypes from 'prop-types';
import { statusCheckboxes } from '../../../components/Checkboxes/CheckboxesData';
import Checkbox from '../../../components/Checkboxes/Checkbox';
import styles from './Checkboxes.module.scss';

class StatusCheckboxContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)}));
    // console.log(this.state); this.state store information about checked and unchecked boxes
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.checkboxesWrapper} >
        {
          statusCheckboxes.map(item => (
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

export default StatusCheckboxContainer;