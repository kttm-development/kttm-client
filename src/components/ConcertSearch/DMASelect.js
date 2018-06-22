
import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

import 'react-select/dist/react-select.css';

// const DMA = require('../data/states');

// let DMASelect = createClass({
// export function DMASelect({
// displayName: 'DMA Select',
// propTypes: {
// 	label: PropTypes.string,
// 	searchable: PropTypes.bool,
// },
// getDefaultProps () {
// 	return {
// 		label: 'Locations:',
// 		searchable: true,
// 	};
// },
// getInitialState () {
// 	return {
// 		country: 'USA',
// 		disabled: false,
// 		searchable: this.props.searchable,
// 		selectValue: 'testing',
// 		clearable: true,
// 		rtl: false,
// 	};
// },
// clearValue (e) {
// 	this.select.setInputValue('');
// },
// switchCountry (e) {
// 	var newCountry = e.target.value;
// 	this.setState({
// 		country: newCountry,
// 		selectValue: null,
// 	});
// },
// updateValue (newValue) {
// 	this.setState({
// 		selectValue: newValue,
// 	});
// },
// focusStateSelect () {
// 	this.select.focus();
// },
// toggleCheckbox (e) {
// 	let newState = {};
// 	newState[e.target.name] = e.target.checked;
// 	this.setState(newState);
// },
export default class DMASelect extends React.Component {
    render() {
        // let options = DMA[this.state.country];
        return (
            <div className="section">
                {/* <h3 className="section-heading">{this.props.label}</h3> */}
                <Select
                    id="state-select"
                    ref={(ref) => { this.select = ref; }}
                    onBlurResetsInput={false}
                    onSelectResetsInput={false}
                    autoFocus
                    // options={options}
                    simpleValue
                    // clearable={this.state.clearable}
                    name="selected-state"
                    // disabled={this.state.disabled}
                    // value={this.state.selectValue}
                    onChange={this.updateValue}
                    // rtl={this.state.rtl}
                    // searchable={this.state.searchable}
                />
            </div>
        );
    }
};

// module.exports = DMASelect;